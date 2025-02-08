// Sample job data
const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      description: "We are looking for a skilled Frontend Developer to join our team."
    },
    {
      title: "Backend Developer",
      company: "Code Solutions",
      location: "New York, NY",
      description: "Join our backend team and work on cutting-edge technologies."
    },
    {
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "San Francisco, CA",
      description: "We need a creative UI/UX Designer to enhance our user experience."
    }
  ];
  
  // Sample company data
  const companies = [
    { name: "Tech Corp", logo: "assets/logo.png" },
    { name: "Code Solutions", logo: "assets/logo.png" },
    { name: "Design Studio", logo: "assets/logo.png" }
  ];
  
  // Function to display jobs
  function displayJobs() {
    const jobsContainer = document.querySelector('.jobs-container');
    jobsContainer.innerHTML = ''; // Clear existing content
  
    jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
  
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
      `;
  
      jobsContainer.appendChild(jobCard);
    });
  }
  
  // Function to display companies
  function displayCompanies() {
    const companiesContainer = document.querySelector('.companies-container');
    companiesContainer.innerHTML = ''; // Clear existing content
  
    companies.forEach(company => {
      const companyCard = document.createElement('div');
      companyCard.classList.add('company-card');
  
      companyCard.innerHTML = `
        <img src="${company.logo}" alt="${company.name}">
        <h3>${company.name}</h3>
      `;
  
      companiesContainer.appendChild(companyCard);
    });
  }
  
  // Display jobs and companies on page load
  document.addEventListener('DOMContentLoaded', () => {
    displayJobs();
    displayCompanies();
  });
  
  // Search functionality
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const jobQuery = document.getElementById('search-job').value.toLowerCase();
    const locationQuery = document.getElementById('search-location').value.toLowerCase();
  
    const filteredJobs = jobs.filter(job => {
      return (
        job.title.toLowerCase().includes(jobQuery) &&
        job.location.toLowerCase().includes(locationQuery)
      );
    });
  
    // Display filtered jobs
    const jobsContainer = document.querySelector('.jobs-container');
    jobsContainer.innerHTML = ''; // Clear existing content
  
    filteredJobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
  
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
      `;
  
      jobsContainer.appendChild(jobCard);
    });
  });