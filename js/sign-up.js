/*change The User Image Based On His Choice*/
// Function to handle the file selection and update the image
function handleFileSelect(event) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = event.target.result;
        // previewImage.style.display = 'block'; // Show the image
      }
  
      reader.readAsDataURL(file);
    }
}
const fileInput = document.getElementById('imageInput');
fileInput.addEventListener('change', handleFileSelect);

/* Function to show the Universities and the Departement and the ajor*/
// Load universities data from the JSON file
let universitiesData; // Variable to store the fetched universities data

// Load universities data from the JSON file
fetch('../data/universities.json')
  .then(response => response.json())
  .then(data => {
    universitiesData = data; // Store the fetched data in the variable
    // Populate the University Select options
    const universitySelect = document.getElementById('universitySelect');
    universitiesData.universities.forEach(university => {
      const option = document.createElement('option');
      option.value = university.name;
      option.textContent = university.name;
      universitySelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error loading data:', error));

const facultySelect = document.getElementById('facultySelect');
const departmentSelect = document.getElementById('departmentSelect');

// Function to populate the Faculty Select based on the selected University
function updateFaculties() {
  const selectedUniversity = universitySelect.value;
  const selectedUniversityData = universitiesData.universities.find(u => u.name === selectedUniversity);

  // Clear previous faculty options
  facultySelect.innerHTML = '<option value="">Select Faculty</option>';

  if (selectedUniversityData) {
    selectedUniversityData.faculties.forEach(faculty => {
      const option = document.createElement('option');
      option.value = faculty.name;
      option.textContent = faculty.name;
      facultySelect.appendChild(option);
    });
  }
}

// Function to populate the Department Select based on the selected Faculty
function updateDepartments() {
  const selectedUniversity = universitySelect.value;
  const selectedUniversityData = universitiesData.universities.find(u => u.name === selectedUniversity);
  const selectedFaculty = facultySelect.value;

  // Clear previous department options
  departmentSelect.innerHTML = '<option value="">Select Department</option>';

  if (selectedUniversityData) {
    const selectedFacultyData = selectedUniversityData.faculties.find(f => f.name === selectedFaculty);

    if (selectedFacultyData) {
      selectedFacultyData.departments.forEach(department => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        departmentSelect.appendChild(option);
      });
    }
  }
}

// Add event listeners to update Faculty and Department options when University or Faculty is selected
universitySelect.addEventListener('change', updateFaculties);
facultySelect.addEventListener('change', updateDepartments);