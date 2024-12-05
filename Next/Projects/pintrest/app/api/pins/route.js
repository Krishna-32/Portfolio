import connectToDB from "@/libs/mongodb"

export const POST = async (req) => {
 connectToDB();

 const formData = await req.json();

 const image = formData.get('image');
 const user = formData.get('username');
 const title = formData.get('title');
 const description = formData.get('description');
 const tags = formData.get('tags');

 const tagsArray = tags.split(',').map(tag => { tag.trim() });

 if (!image) {
  return NextResponse.json({ error: "No File Received." }, { status: 400 });
 }

 try {
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const uploadedResponse = await new Promise((resolve, reject) => {
   cloudinary.uploader.upload_stream({}, function (error, result) {
    if (error) reject(error);
    resolve(result);
   }).end(buffer);
  });

  const pin = await Pin.create({
   user,
   title,
   image: { url: uploadedResponse.secure_url },
   description,
   tags: tagsArray,
 });

 return NextResponse.json({
   success: true,
   message: "Pin posted successfully",
   pin, 
 }, { status: 201 });
 } catch (error) {
  console.log("Error in pins route", error);
  return NextResponse.json({
   success: false,
   message: error.message,
  }, { status: 500 });
 }
}