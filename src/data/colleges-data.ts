export interface College {
  name: string;
  location: string;
  type: string;
  rating: number;
  students: string;
  fees: string;
  description: string;
  courses: string[];
  facilities: string[];
  placement: string;
  image: string;
  website: string;
  matchPercentage: number;
}

export const collegesData = {
  "Science (PCM)": [
    {
      name: "National Institute of Technology Srinagar",
      location: "Srinagar, Jammu & Kashmir",
      type: "Central Government Engineering Institute",
      rating: 4.6,
      students: "3,500+",
      fees: "₹1,50,000/year",
      description:
        "Premier NIT offering excellent engineering programs with high placement rates and modern infrastructure in Kashmir valley.",
      courses: [
        "B.Tech CSE",
        "B.Tech ME",
        "B.Tech CE",
        "B.Tech EE",
        "M.Tech",
        "PhD",
      ],
      facilities: [
        "Modern Labs",
        "Library",
        "Sports Complex",
        "Hostels",
        "Research Centers",
      ],
      placement: "Average package ₹8-12 LPA, top companies recruit regularly",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop",
      website: "https://www.nitsri.ac.in",
      matchPercentage: 95,
    },
    {
      name: "Islamic University of Science & Technology (IUST)",
      location: "Pulwama, Jammu & Kashmir",
      type: "Private Technical University",
      rating: 4.3,
      students: "4,000+",
      fees: "₹75,000/year",
      description:
        "Leading private university in J&K offering comprehensive engineering and technology programs with industry focus.",
      courses: ["B.Tech", "BCA", "MCA", "MBA", "M.Tech", "PhD"],
      facilities: [
        "Modern Campus",
        "Research Labs",
        "Library",
        "Hostels",
        "Sports",
      ],
      placement: "Good placement record with 70%+ placement rate",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop",
      website: "https://www.iust.ac.in",
      matchPercentage: 88,
    },
    {
      name: "Shri Mata Vaishno Devi University",
      location: "Katra, Jammu & Kashmir",
      type: "State Private University",
      rating: 4.2,
      students: "5,000+",
      fees: "₹1,20,000/year",
      description:
        "Modern university offering engineering, management, and applied sciences with excellent infrastructure.",
      courses: ["B.Tech", "BCA", "B.Sc", "MBA", "M.Tech"],
      facilities: [
        "Hi-tech Campus",
        "Labs",
        "Library",
        "Hostels",
        "Medical Center",
      ],
      placement: "Average package ₹4-8 LPA with good industry connections",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop",
      website: "https://www.smvdu.ac.in",
      matchPercentage: 85,
    },
    {
      name: "University of Jammu - School of Engineering",
      location: "Jammu, Jammu & Kashmir",
      type: "State University Engineering School",
      rating: 4.0,
      students: "2,500+",
      fees: "₹40,000/year",
      description:
        "Established engineering school under University of Jammu offering quality technical education at affordable fees.",
      courses: ["B.Tech", "M.Tech", "PhD in Engineering"],
      facilities: ["Engineering Labs", "Library", "Workshop", "Hostels"],
      placement:
        "Decent placement opportunities in government and private sectors",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop",
      website: "https://www.jammuuniversity.ac.in",
      matchPercentage: 82,
    },
    {
      name: "Central University of Jammu",
      location: "Samba, Jammu & Kashmir",
      type: "Central University",
      rating: 4.1,
      students: "3,000+",
      fees: "₹25,000/year",
      description:
        "Central university offering diverse programs including computer applications and sciences.",
      courses: ["BCA", "MCA", "B.Sc Computer Science", "M.Sc", "PhD"],
      facilities: ["Computer Labs", "Library", "Research Centers", "Hostels"],
      placement: "Good placement in IT companies and government sectors",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop",
      website: "https://www.cujammu.ac.in",
      matchPercentage: 80,
    },
  ],
  "Science (PCB)": [
    {
      name: "Government Medical College Srinagar",
      location: "Srinagar, Jammu & Kashmir",
      type: "Government Medical College",
      rating: 4.5,
      students: "2,000+",
      fees: "₹25,000/year",
      description:
        "Premier medical institution in Kashmir valley offering comprehensive medical education with attached hospital.",
      courses: ["MBBS", "MD", "MS", "Nursing", "Paramedical"],
      facilities: [
        "Hospital",
        "Research Labs",
        "Library",
        "Hostels",
        "Emergency Care",
      ],
      placement: "100% placement in government hospitals and healthcare sector",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      website: "https://www.gmcsrinagar.edu.in",
      matchPercentage: 95,
    },
    {
      name: "Government Medical College Jammu",
      location: "Jammu, Jammu & Kashmir",
      type: "Government Medical College",
      rating: 4.4,
      students: "1,800+",
      fees: "₹30,000/year",
      description:
        "Established medical college with excellent clinical facilities and experienced faculty.",
      courses: ["MBBS", "MD", "MS", "Nursing"],
      facilities: ["Associated Hospital", "Labs", "Library", "Hostels"],
      placement: "Excellent placement in medical field with PG opportunities",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      website: "https://www.gmcjammu.ac.in",
      matchPercentage: 92,
    },
    {
      name: "Sher-i-Kashmir Institute of Medical Sciences",
      location: "Srinagar, Jammu & Kashmir",
      type: "State Medical Institute",
      rating: 4.6,
      students: "1,500+",
      fees: "₹35,000/year",
      description:
        "Premier medical institute and hospital providing super-specialty medical education and healthcare.",
      courses: ["MBBS", "MD", "MS", "MCh", "DM", "Nursing"],
      facilities: [
        "Super-specialty Hospital",
        "Research Centers",
        "Modern Equipment",
      ],
      placement: "Top placement opportunities in medical field across India",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      website: "https://www.skims.ac.in",
      matchPercentage: 96,
    },
  ],
  Commerce: [
    {
      name: "University of Kashmir - Business School",
      location: "Srinagar, Jammu & Kashmir",
      type: "University Business School",
      rating: 4.2,
      students: "1,500+",
      fees: "₹20,000/year",
      description:
        "Premier business school offering comprehensive commerce and management programs with industry exposure.",
      courses: ["B.Com", "BBA", "MBA", "M.Com", "CA Foundation"],
      facilities: [
        "Modern Classrooms",
        "Library",
        "Computer Labs",
        "Seminar Halls",
      ],
      placement:
        "Excellent placement in banking, finance, and corporate sectors",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      website: "https://www.kashmiruniversity.ac.in",
      matchPercentage: 92,
    },
    {
      name: "Islamic University of Science & Technology - Management",
      location: "Pulwama, Jammu & Kashmir",
      type: "Private University",
      rating: 4.1,
      students: "2,000+",
      fees: "₹60,000/year",
      description:
        "Leading private university offering BBA and MBA programs with modern curriculum and industry partnerships.",
      courses: ["BBA", "MBA", "B.Com", "Integrated Courses"],
      facilities: [
        "Business Labs",
        "Library",
        "Hostels",
        "Corporate Training Center",
      ],
      placement: "Good placement record with average package ₹3-6 LPA",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      website: "https://www.iust.ac.in",
      matchPercentage: 88,
    },
  ],
  "Arts/Humanities": [
    {
      name: "University of Kashmir - Arts Faculty",
      location: "Srinagar, Jammu & Kashmir",
      type: "State University",
      rating: 4.3,
      students: "8,000+",
      fees: "₹12,000/year",
      description:
        "Premier arts faculty offering diverse humanities programs with rich cultural heritage and academic excellence.",
      courses: [
        "B.A. English",
        "B.A. Psychology",
        "B.A. Political Science",
        "M.A.",
        "PhD",
      ],
      facilities: [
        "Central Library",
        "Language Labs",
        "Cultural Center",
        "Research Centers",
      ],
      placement:
        "Excellent opportunities in teaching, civil services, and media",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      website: "https://www.kashmiruniversity.ac.in",
      matchPercentage: 94,
    },
    {
      name: "Central University of Kashmir - Liberal Arts",
      location: "Ganderbal, Jammu & Kashmir",
      type: "Central University",
      rating: 4.2,
      students: "3,500+",
      fees: "₹18,000/year",
      description:
        "New central university offering innovative liberal arts programs with interdisciplinary approach.",
      courses: [
        "Liberal Arts",
        "Social Work",
        "Mass Communication",
        "Psychology",
      ],
      facilities: ["Modern Campus", "Library", "Media Center", "Hostels"],
      placement: "Good placement in media, NGOs, and government sectors",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      website: "https://www.cukashmir.ac.in",
      matchPercentage: 90,
    },
  ],
};
