# LinkedIn Job Details Extractor

A web application that extracts job details from LinkedIn job postings and saves them in a `.docx` file. This project consists of a React frontend and a Flask backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Validate LinkedIn job URLs.
- Scrape job details such as company name, job title, and location.
- Save job details in a `.docx` file in the user's Downloads folder.
- Retry logic for handling HTTP errors (status code 429).
- User-friendly interface with loading indicators and error handling.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask, BeautifulSoup, Requests
- **Document Generation**: python-docx
- **Environment**: Python 3.x, Node.js

## Installation

### Prerequisites

Make sure you have the following installed on your computer:

- [Node.js](https://nodejs.org/) (for running the React app)
- [Python 3.x](https://www.python.org/downloads/) (for running the Flask backend)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)

### Clone the Repository

```bash
git clone https://github.com/yourusername/linkedin-job-details-extractor.git
cd linkedin-job-details-extractor
