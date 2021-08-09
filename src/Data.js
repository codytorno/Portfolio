const getAge = () => {
  var bday = new Date(1989, 8, 31);
  var delta = new Date(Date.now() - bday.getTime());
  var answer = Math.abs(delta.getUTCFullYear() - 1970);
  return answer;
};

const Portfolio = {
  hero: {
    id: "home",
    video: require("./videos/video.mp4").default,
    title: "I'm Cody Torno",
    description: "I love challenging problems and learning new things.",
    resumelink:
      "https://drive.google.com/uc?export=download&id=1Gqm1i79Q7D9wmxv6gOwD8FQgys4N4i2T",
  },
  aboutMe: {
    id: "about",
    occupation: "Mechanical Engineer & Software Developer",
    location: "Fort Worth, TX",
    formatlight: true,
    img: require("./images/svg-car.svg").default,
    title: "About Me",
    details: [
      {
        Title: "Name:",
        Description: "Cody Torno",
        Icon: ["far", "id-badge"],
      },
      {
        Title: "Email:",
        Description: "cody.torno1@gmail.com",
        Icon: ["far", "envelope-open"],
      },
      {
        Title: "Location:",
        Description: "Fort Worth, TX",
        Icon: ["far", "compass"],
      },
      {
        Title: "Age:",
        Description: getAge() + " years old",
        Icon: ["far", "calendar-alt"],
      },
    ],
    paragraphs: [
      "I started computer programming 5 years ago, when tasked with some project work that required some back-end automation of a CAD Software Called CATIA.",
      "I never looked back",
    ],
  },
  Projects: {},
  Education: {},
};

export default Portfolio;
