const SUPABASE_URL = "https://hamenlvaixzcgkiubrng.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhbWVubHZhaXh6Y2draXVicm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MzQwMDgsImV4cCI6MjA1ODIxMDAwOH0.638-aokF7EoLssDB6UflqxgaG6-liv7DtG1jBwQ8ItQ";  // 🔹 Replace with your actual Supabase Anon Key
const BUCKET_NAME = "academicpdfs";  // 🔹 Updated bucket name

const resources = [
    { title: "C", file: "c.pdf" },
    { title: "JAVA", file: "java.pdf" },
    { title: "PYTHON", file: "python.pdf" },
    { title: "SQL", file: "sql.pdf" },
    { title: "C++", file: "c++.pdf" },
    { title: "HTML", file: "html.pdf" },
    { title: "CSS", file: "css.pdf" },
    { title: "JAVASCRIPT", file: "javascript.pdf" },
    { title: "VLSI", file: "vlsi.pdf" },
    { title: "EMBEDDED SYSTEMS", file: "embedded_systems.pdf" },
    { title: "SIGNALS & SYSTEMS", file: "signals_systems.pdf" },
    { title: "MPMC", file: "mpmc.pdf" },
    { title: "INTERNET OF THINGS", file: "internet_of_things.pdf" },
    { title: "DEEP LEARNING", file: "deep_learning.pdf" },
    { title: "MACHINE LEARNING", file: "machine_learning.pdf" },
    { title: "ARTIFICIAL INTELLIGENCE", file: "artificial_intelligence.pdf" },
    { title: "REINFORCEMENT LEARNING", file: "reinforcement_learning.pdf" },
    { title: "COMPUTER VISION", file: "computer_vision.pdf" },
    { title: "ENGINEERING MECHANICS", file: "engineering_mechanics.pdf" },
    { title: "STRENGTH OF MATERIALS", file: "strength_materials.pdf" },
    { title: "THERMODYNAMICS", file: "thermodynamics.pdf" },
    { title: "FLUID MECHANICS & HYDRAULICS", file: "fluid_mechanics_hydraulics.pdf" },
    { title: "KINETICS & DYNAMICS OF ROBOTS", file: "kinetics_dynamics.pdf" },
    { title: "CONTROL SYSTEMS", file: "control_systems.pdf" },
    { title: "AI ALGORITHMS", file: "ai_algorithms.pdf" },
    { title: "AI PROGRAMMING", file: "ai_programming.pdf" },
    { title: "ROBOT OPERATING SYSTEM", file: "robot_operating.pdf" },
    { title: "DIGITAL SIGNAL PROCESSING", file: "digital_processing.pdf" },
    { title: "AI PROJECT IDEAS", file: "ai_projects.pdf" },
    { title: "AI TRENDS 2025", file: "ai_trends.pdf" }
];

const resourcesContainer = document.getElementById("resources");
const noResultsMessage = document.getElementById("no-results");

function loadResources() {
    resourcesContainer.innerHTML = ""; // Clear previous content

    resources.forEach(resource => {
        const card = document.createElement("div");
        card.classList.add("resource-card");

        // 🔹 Construct Supabase file URL dynamically
        const fileUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${resource.file}`;

        card.innerHTML = `
            <h3>${resource.title}</h3>
            <a href="${fileUrl}" download class="download-btn">Download</a>
        `;
        resourcesContainer.appendChild(card);
    });
}

// Function to filter resources dynamically
function filterResources() {
    const searchText = document.getElementById("search-bar").value.toLowerCase();
    const resourceCards = document.querySelectorAll(".resource-card");
    let found = false;

    resourceCards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        if (title.includes(searchText)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    noResultsMessage.style.display = found ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", loadResources);

