(function() {
  var model = {
    bio: {
      name: 'Kevin Huang',
      role: 'Web Developer',
      contacts: {
        mobile: '415-555-5555',
        email: 'kev@kevhuang.com',
        github: 'kevhuang',
        twitter: '@kevhuang',
        location: 'San Francisco'
      },
      welcomeMessage: 'Aye yo!',
      skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'jQuery'],
      biopic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/1d8/19c/092273c.jpg',
      display: function() {}
    },

    education: {
      schools: [
        {
          name: 'Hack Reactor',
          location: 'San Francisco, CA',
          degree: 'Hacker',
          majors: ['Web Development'],
          dates: 2015,
          url: 'http://www.hackreactor.com/'
        }
      ],
      onlineCourses: [],
      display: function() {}
    },

    work: {
      jobs: [
        {
          employer: 'Google',
          title: 'Sr. Janitor',
          location: 'San Francisco, CA',
          dates: 'Jan 2013 - Dec 2014',
          description: 'Provided clean toilets for executive team'
        },
        {
          employer: 'Google',
          title: 'Janitor',
          location: 'San Francisco, CA',
          dates: 'Jan 2012 - Dec 2013',
          description: 'Provided clean toilets for general staff'
        }
      ],
      display: function() {}
    },

    projects: {
      projects: [
        {
          title: 'Twittler',
          dates: 'Feb 2015',
          description: 'Built a Twitter clone from scratch',
          images: ['http://cdn.socialmediaexaminer.com/wp-content/uploads/2013/04/ck-list-timeline.png']
        }
      ],
      display: function() {}
    }
  };

  var controller = {
    init: function() {
      bioView.render();
      workView.render();
      projectView.render();
    },

    getBio: function() {
      return model.bio;
    },

    getWork: function() {
      return model.work;
    },

    getProjects: function() {
      return model.projects;
    }
  };

  var bioView = {
    render: function() {
      var bio = controller.getBio();
      
      var headerName = $(HTMLheaderName.replace(/%data%/g, bio.name));
      var headerRole = $(HTMLheaderRole.replace(/%data%/g, bio.role));
      $('#header').prepend(headerName, headerRole);

      var contactMobile = $(HTMLmobile.replace(/%data%/g, bio.contacts.mobile));
      var contactEmail = $(HTMLemail.replace(/%data%/g, bio.contacts.email));
      var contactGitHub = $(HTMLgithub.replace(/%data%/g, bio.contacts.github));
      var contactTwitter = $(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
      var contactLocation = $(HTMLlocation.replace(/%data%/g, bio.contacts.location));
      $('#topContacts').append(contactMobile, contactEmail, contactGitHub, contactTwitter, contactLocation);

      var bioPic = $(HTMLbioPic.replace(/%data%/g, bio.biopic));
      var welcomeMessage = $(HTMLWelcomeMsg.replace(/%data%/g, bio.welcomeMessage));
      $('#header').append(bioPic, welcomeMessage, $(HTMLskillsStart));

      var skillsUL = $('#skills');
      bio.skills.forEach(function(skill) {
        var listItem = $(HTMLskills.replace(/%data%/g, skill));
        skillsUL.append(listItem);
      });
    }
  };

  var workView = {
    render: function() {
      var work = controller.getWork();
      work.jobs.forEach(function(job) {
        var jobDiv = $(HTMLworkStart);
        
        var jobHeader = $((HTMLworkEmployer.replace(/%data%/g, job.employer) + 
          HTMLworkTitle.replace(/%data%/g, job.title)));
        jobDiv.append(jobHeader);

        var jobDates = $(HTMLworkDates.replace(/%data%/g, job.dates));
        var jobLocation = $(HTMLworkLocation.replace(/%data%/g, job.location));
        var jobDescription = $(HTMLworkDescription.replace(/%data%/g, job.description));
        jobDiv.append(jobDates, jobLocation, jobDescription);

        $('#workExperience').append(jobDiv);
      });
    }
  };

  var projectView = {
    render: function() {
      var projects = controller.getProjects();
      projects.projects.forEach(function(project) {
        var projectDiv = $(HTMLprojectStart);

        var projectTitle = $(HTMLprojectTitle.replace(/%data%/g, project.title));
        var projectDates = $(HTMLprojectDates.replace(/%data%/g, project.dates));
        var projectDescription = $(HTMLprojectDescription.replace(/%data%/g, project.description));
        projectDiv.append(projectTitle, projectDates, projectDescription);

        project.images.forEach(function(image) {
          var projectImage = $(HTMLprojectImage.replace(/%data%/g, image));
          projectDiv.append(projectImage);
        });
        
        $('#projects').append(projectDiv);
      });
    }
  };

  controller.init();
})();