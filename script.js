// script.js
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { "id": "task1", "title": "Project 1", "url": "works/task1/index.html" },
        { "id": "task2", "title": "Project 2", "url": "works/task2/index.html" },
        { "id": "task3", "title": "Project 3", "url": "works/task3/index.html" },
        { "id": "task4", "title": "Project 4", "url": "works/task4/index.html" },
        { "id": "task5", "title": "Project 5", "url": "works/task5/index.html" },
        { "id": "task6", "title": "Project 6", "url": "works/task6/index.html" },
        { "id": "task7", "title": "Project 7", "url": "works/task7/index.html" },
        { "id": "task8", "title": "Project 8", "url": "works/task8/index.html" },
        { "id": "task9", "title": "Project 9", "url": "works/task9/index.html" },
        { "id": "task10", "title": "Project 10", "url": "works/task10/index.html" },
        { "id": "task11", "title": "Project 11", "url": "works/task11/index.html" },
        { "id": "task12a", "title": "Project 12a", "url": "works/task12a/index.html" },
        { "id": "task12b", "title": "Project 12b", "url": "works/task12b/index.html" },
        { "id": "task13", "title": "Project 13", "url": "works/task13/index.html" },
        { "id": "task14a", "title": "Project 14a", "url": "works/task14a/index.html" },
        { "id": "task14b", "title": "Project 14b", "url": "works/task14b/index.html" },
        { "id": "task14c", "title": "Project 14c", "url": "works/task14c/index.html" },
        { "id": "task14d", "title": "Project 14d", "url": "works/task14d/index.html" },
        { "id": "task15a", "title": "Project 15a", "url": "works/task15a/index.html" },
        { "id": "task15b", "title": "Project 15b", "url": "works/task15b/index.html" },
        { "id": "task15c", "title": "Project 15c", "url": "works/task15c/index.html" },
        { "id": "task15d", "title": "Project 15d", "url": "works/task15d/index.html" },
        { "id": "task16", "title": "Project 16", "url": "works/task16/index.html" },
    ];

    const projectList = document.getElementById('projectList');
    const workFrame = document.getElementById('workFrame');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project.title;
        listItem.addEventListener('click', () => loadProject(project.id));
        projectList.appendChild(listItem);
    });

    function loadProject(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            workFrame.src = project.url;
            workFrame.title = project.title;
        } else {
            alert("Project not found!");
            workFrame.src = "works/landing.html";
            workFrame.title = "Select a project";
        }
    }
});