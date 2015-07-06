//Bio JSON
var bio = {
    "name": "J.T. Robinson",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "jrobinson704@gmail.com",
        "github": "jtrob704",
        "location": "Charlotte, NC"
    },
    "welcomeMessage": "Welcome to my resume. Here you will find information about myself, work history, education and skills",
    "skills": [
        "HTML5", "CSS3", "Javascript", "Bootstap", "jQuery"
    ],
    "bioPic": "images/fry.jpg"
};

//Education JSON
var education = {
    "schools": [
        {
            "name": "Udacity",
            "location": "San Diego, CA",
            "degree": "Front-End Web Developer",
            "major": "Web Development",
            "dates": 2015
        },
        {
            "name": "ECPI",
            "location": "Charlotte, NC",
            "degree": "Applied Science",
            "major": "Computer Technology",
            "dates": 2001
        }
    ]
    ,
    "onlineCourses": [
        {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ]
};

//Work JSON
var work = {
    "jobs": [
        {
            "employer": "AT&T Mobility",
            "title": "Specialist-Network Control",
            "location": "Charlotte, NC",
            "dates": ["2001-present"],
            "description": "Responsible for RAN performance and operations for the AT&T Ericsson/Nortel mobility footprint"
        }
    ]
};

//Projects JSON
var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "June 15th 2015",
            "description": "My first project in the Udacity Front-End Web Developer nanodegree program in which I learned HTML5, CSS3 and Bootstrap",
            "images": "images/197x148.gif"
        },
        {
            "title": "Resume",
            "dates": "July 5th 2015",
            "description": "In this project I learned JavaScript and jQuery",
            "images": "images/197x148.gif"
        }
    ]
};


//Bio function
bio.display = function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(formattedMessage);
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }

    $("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);
    //Let's Connect
    $("#lets-connect").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);
};

//Work function
work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//Projects Function

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
    }
};

//Education function

education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (onlineCourse in education.onlineCourses) {

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".education-entry:last").append(formattedCourseTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);
    }
};

//Display function calls
bio.display();
work.display();
projects.display();
education.display();

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;

}

//Append Google Map
$("#map-div").append(googleMap);

//Log clicks function
$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});