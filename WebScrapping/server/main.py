import requests
from bs4 import BeautifulSoup

url = "https://ca.linkedin.com/jobs/view/software-engineer-matching-at-lyft-4051045464?position=6&pageNum=0&refId=Gf%2BPvyaV%2F30DMwY8GLwfYA%3D%3D&trackingId=piqL2NDh%2BqoJTXzgcZnlAw%3D%3D"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')
    
    h1_element = soup.find('h1', class_='top-card-layout__title')
    if h1_element:
        print("Job Title:", h1_element.get_text(strip=True))
    
    company_link = soup.find('a', class_='topcard__org-name-link')
    if company_link:
        print("Company Name:", company_link.get_text(strip=True))
    
    location_span = soup.find('span', class_='topcard__flavor topcard__flavor--bullet')
    if location_span:
        print("Location:", location_span.get_text(strip=True))
else:
    print(f"Failed to retrieve page. Status code: {response.status_code}")
