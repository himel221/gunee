import React, { useState, useEffect } from 'react';
import './home.css';

function Home({ onNavigate, route }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Board of Directors');
  const [activeService, setActiveService] = useState(null);
  const [showNewsDetail, setShowNewsDetail] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [shareTooltip, setShareTooltip] = useState(false);

  // Focus Areas carousel state
  const [focusIndex, setFocusIndex] = useState(0);

  // Team carousel state
  const [teamIndex, setTeamIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ Lock body scroll when modal is open
  useEffect(() => {
    if (activeMember !== null) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Prevent layout shift from scrollbar disappearing
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [activeMember]);

  const toggleMember = (index) => {
    setActiveMember(activeMember === index ? null : index);
  };

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const handleDownloadCV = (cvPath, e) => {
    e.stopPropagation();
    window.open(cvPath, '_blank');
  };

  const openGmail = () => {
    const subject = encodeURIComponent('Inquiry from Gunee Bangladesh Website');
    const body = encodeURIComponent(
      'Dear Gunee Bangladesh Team,\n\n' +
      'I would like to inquire about your services. Please find my details below:\n\n' +
      'Name: \n' +
      'Organization: \n' +
      'Phone: \n' +
      'Message: \n\n' +
      'Thank you for your time.\n\n' +
      'Best regards,\n' +
      '[Your Full Name]'
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to= guneebd@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  // ============================================
  // SERVICE DATA
  // ============================================
  const serviceData = [
    {
      id: 0,
      title: 'Research',
      description: 'Data-driven insights for informed decision-making',
      points: [
        'Policy Research & Analysis',
        'Socio-Economic Surveys',
        'Gender & Equity Studies',
        'Environmental Impact Assessments',
        'Data Analytics & Insights',
        'Market Research & Feasibility Studies',
        'Public Policy Evaluation',
        'Qualitative & Quantitative Research',
        'Baseline & Endline Studies',
        'Research Capacity Building'
      ]
    },
    {
      id: 1,
      title: 'Training',
      description: 'Empowering individuals and organizations through learning',
      points: [
        'Leadership Development',
        'Technical Skill Building',
        'Gender & Social Inclusion Training',
        'Financial Literacy Programs',
        'Project Management Training',
        'Monitoring & Evaluation Training',
        'Communication & Advocacy Skills',
        'Data Analysis & Research Methodology',
        'Organizational Capacity Development',
        'Policy Formulation & Governance Training'
      ]
    },
    {
      id: 2,
      title: 'Consulting',
      description: 'Expert guidance for sustainable growth and impact',
      points: [
        'Strategic Planning & Advisory',
        'Organizational Development',
        'Policy Formulation & Reform',
        'Impact Evaluation & Monitoring',
        'Sector-Specific Expert Advisory'
      ]
    }
  ];

  // ============================================
  // TEAM MEMBERS DATA
  // ============================================
  const teamMembers = [
    {
      id: 0,
      name: 'Rafez Alam Chowdhury',
      role: 'Chairman',
      category: 'Board of Directors',
      image: '/images/rafez.jpg',
      bio: 'Rafez Alam Chowdhury is the visionary Chairman of Gunee Bangladesh Limited. With a distinguished career spanning over two decades in policy research, gender studies, and socio-economic development, he has been instrumental in shaping the organization\'s strategic direction. His leadership has been pivotal in driving impactful initiatives across Bangladesh, particularly in the areas of financial inclusion, gender equity, and sustainable development. He previously served as a senior researcher at Dhaka University and has consulted for numerous international development organizations. His commitment to excellence and innovation continues to inspire the entire team, making Gunee Bangladesh a beacon of transformative change in the country.',
      details: {
        expertise: 'Policy Research, Gender Studies, Socio-Economic Development',
        experience: '20+ years in research and policy formulation',
        education: 'PhD in Economics, Dhaka University'
      },
      cv: '/cvs/rafez.pdf'
    },
    {
      id: 1,
      name: 'Aysha Banu, PhD',
      role: 'Director',
      category: 'Board of Directors',
      image: '/images/aysha.png',
      bio: 'Dr. Aysha Banu is a distinguished Director at Gunee Bangladesh Limited, bringing over a decade of expertise in leadership development, organizational capacity building, and training. She holds a PhD in Organizational Psychology from BUET and has successfully designed and implemented numerous training programs for government agencies, NGOs, and private sector organizations. Her work focuses on empowering individuals and organizations to achieve their full potential through evidence-based training methodologies. Dr. Banu is also a published author and has presented her research at international conferences, making significant contributions to the field of organizational development and human capital management.',
      details: {
        expertise: 'Leadership Training, Capacity Building, Organizational Development',
        experience: '10+ years in training and development',
        education: 'PhD in Organizational Psychology, BUET'
      },
      cv: '/cvs/aysha.pdf'
    },
    {
      id: 2,
      name: 'Qurratul-Ain-Tahmina',
      role: 'Director',
      category: 'Board of Directors',
      image: '/images/tahmina.png',
      bio: "Qurratul-Ain-Tahmina is a freelance journalist, trainer, teacher and researcher. From 1987 to 2010, she worked with the weekly Dhaka Courier, BBC Bengali Service and Inter Press Service (IPS). She joined The Daily Prothom Alo in 2006, where she currently works as a Journalist Recruitment and Development Consultant. From 1989 to 1992, she was a lecturer at the Department of Mass Communication and Journalism, University of Dhaka, where she continues as an adjunct faculty. Tahmina trains journalists on journalism ethics, basic and investigative journalism, storytelling skills, and issues concerning gender, children and marginalised communities. Her research areas include sex-workers, creative initiatives of the common people, media regulations and self-regulation, gender-related issues and content analysis. She also develops media advocacy, policies and guidelines. Tahmina's publications include Sex-Workers in Bangladesh/Livelihood at What Price?; Chorcha Korun Khobor Likhun (A handbook for reporters); Gender Equality and Media Regulation Study Bangladesh; Women and Hijras in Bangladeshi News Media; Sangbadikotar Neeti-Noyitikotar Digonte Gender (A guide for gender-sensitive journalism)",
      details: {
        expertise: 'Journalism, Media Policy, Gender Studies, Research',
        experience: '30+ years in journalism and media development',
        education: 'MA in Mass Communication, University of Dhaka'
      },
      cv: '/cvs/tahmina.pdf'
    },
    {
      id: 3,
      name: 'Rashik Alam Chowdhury',
      role: 'Director',
      category: 'Board of Directors',
      image: '/images/rashik.png',
      bio: 'Rashik Alam Chowdhury is a technology visionary and Director at Gunee Bangladesh Limited, specializing in technology solutions, innovation strategy, and digital transformation. With a Master\'s degree in Computer Science from BUET, he has over 8 years of experience in technology consulting, helping organizations leverage cutting-edge technologies to drive efficiency and growth. Rashik has successfully led numerous digital transformation projects for both public and private sector clients, focusing on creating sustainable technology solutions that address complex challenges. His expertise spans across software development, data analytics, and strategic technology planning, making him a key asset in Gunee Bangladesh\'s mission to drive innovation across sectors.',
      details: {
        expertise: 'Technology Solutions, Innovation Strategy, Digital Transformation',
        experience: '8+ years in technology consulting',
        education: "Master's in Computer Science, BUET"
      },
      cv: '/cvs/rashik.pdf'
    },
    {
      id: 4,
      name: 'Arif Jawad Siam',
      role: 'Director',
      category: 'Board of Directors',
      image: '/images/arif.jpg',
      bio: 'Arif Jawad Siam is an environmental policy expert and Director at Gunee Bangladesh Limited, dedicated to advancing sustainability and climate action. He holds a Master\'s degree in Environmental Science from BUET and has over 6 years of experience in environmental research and consulting. Arif has worked extensively on climate change adaptation, environmental impact assessments, and sustainable development initiatives across Bangladesh. His work has contributed to shaping environmental policies and strategies for both government and non-government organizations. He is passionate about building a greener future and has been actively involved in community-based environmental awareness programs, making significant contributions to environmental conservation and sustainable development in the region.',
      details: {
        expertise: 'Environmental Policy, Sustainability, Climate Change',
        experience: '6+ years in environmental research and consulting',
        education: "Master's in Environmental Science, BUET"
      },
      cv: '/cvs/arif.pdf'
    },
    {
      id: 5,
      name: 'Dr. Mohammad Ali',
      role: 'Senior Advisor',
      category: 'Advisors',
      image: '/images/advisor1.png',
      bio: 'Dr. Mohammad Ali is a renowned economist and policy advisor with over 25 years of experience in economic policy, development economics, and public finance. He has advised numerous government agencies and international organizations on economic reform and development strategies.',
      details: {
        expertise: 'Economic Policy, Development Economics, Public Finance',
        experience: '25+ years in economic policy and advisory',
        education: 'PhD in Economics, University of Cambridge'
      },
      cv: '/cvs/advisor1.pdf'
    },
    {
      id: 6,
      name: 'Prof. Sultana Begum',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor2.png',
      bio: 'Prof. Sultana Begum is a distinguished academic and gender specialist with over 20 years of experience in gender studies, social policy, and academic research. She has published extensively on gender equality and women\'s empowerment in South Asia.',
      details: {
        expertise: 'Gender Studies, Social Policy, Academic Research',
        experience: '20+ years in academia and research',
        education: 'PhD in Gender Studies, University of London'
      },
      cv: '/cvs/advisor2.pdf'
    },
    {
      id: 7,
      name: 'Dr. Kamal Uddin',
      role: 'Technical Advisor',
      category: 'Advisors',
      image: '/images/advisor3.png',
      bio: 'Dr. Kamal Uddin is a technology expert and innovation advisor with over 15 years of experience in technology innovation, digital strategy, and artificial intelligence. He has led numerous digital transformation initiatives across multiple sectors.',
      details: {
        expertise: 'Technology Innovation, Digital Strategy, AI/ML',
        experience: '15+ years in technology and innovation',
        education: 'PhD in Computer Science, MIT'
      },
      cv: '/cvs/advisor3.pdf'
    },
    {
      id: 8,
      name: 'Ms. Farida Akhter',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor4.png',
      bio: 'Ms. Farida Akhter is a media and communications specialist with over 18 years of experience in media strategy, communications, and public relations. She has worked with leading media houses and international organizations.',
      details: {
        expertise: 'Media Strategy, Communications, Public Relations',
        experience: '18+ years in media and communications',
        education: 'MA in Mass Communication, University of Dhaka'
      },
      cv: '/cvs/advisor4.pdf'
    },
    {
      id: 9,
      name: 'Dr. Shahid Mahmud',
      role: 'Environmental Advisor',
      category: 'Advisors',
      image: '/images/advisor5.png',
      bio: 'Dr. Shahid Mahmud is an environmental scientist and sustainability expert with over 12 years of experience in environmental science, sustainability, and climate policy. He has contributed to several national and international climate change initiatives.',
      details: {
        expertise: 'Environmental Science, Sustainability, Climate Policy',
        experience: '12+ years in environmental research',
        education: 'PhD in Environmental Science, University of Tokyo'
      },
      cv: '/cvs/advisor5.pdf'
    },
    {
      id: 10,
      name: 'Prof. Ahmed Hossain',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor6.png',
      bio: 'Prof. Ahmed Hossain is a development economist and policy expert with over 22 years of experience in development economics, poverty alleviation, and policy analysis. He has worked with the World Bank and UNDP on various development projects.',
      details: {
        expertise: 'Development Economics, Poverty Alleviation, Policy Analysis',
        experience: '22+ years in development economics',
        education: 'PhD in Economics, University of Oxford'
      },
      cv: '/cvs/advisor6.pdf'
    },
    {
      id: 11,
      name: 'Ms. Nazma Begum',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor7.png',
      bio: 'Ms. Nazma Begum is a social entrepreneur and community development specialist with over 15 years of experience in community development, social entrepreneurship, and NGO management. She has founded several successful social enterprises.',
      details: {
        expertise: 'Community Development, Social Entrepreneurship, NGO Management',
        experience: '15+ years in social development',
        education: 'MA in Social Work, University of Dhaka'
      },
      cv: '/cvs/advisor7.pdf'
    },
    {
      id: 12,
      name: 'Dr. Rashed Khan',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor8.png',
      bio: 'Dr. Rashed Khan is a finance and investment expert with over 20 years of experience in finance, investment, and capital markets. He has held senior positions at leading financial institutions and has advised on major investment projects.',
      details: {
        expertise: 'Finance, Investment, Capital Markets',
        experience: '20+ years in finance and investment',
        education: 'PhD in Finance, London Business School'
      },
      cv: '/cvs/advisor8.pdf'
    },
    {
      id: 13,
      name: 'Prof. Jahanara Islam',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor9.png',
      bio: 'Prof. Jahanara Islam is a distinguished academic in public policy with over 25 years of experience in public policy, governance, and public administration. She has served as a policy advisor to several government ministries.',
      details: {
        expertise: 'Public Policy, Governance, Public Administration',
        experience: '25+ years in public policy and governance',
        education: 'PhD in Public Policy, Harvard University'
      },
      cv: '/cvs/advisor9.pdf'
    },
    {
      id: 14,
      name: 'Mr. Golam Rabbani',
      role: 'Advisor',
      category: 'Advisors',
      image: '/images/advisor10.png',
      bio: 'Mr. Golam Rabbani is a business strategy and management consultant with over 18 years of experience in business strategy, management consulting, and organizational development. He has worked with Fortune 500 companies.',
      details: {
        expertise: 'Business Strategy, Management Consulting, Organizational Development',
        experience: '18+ years in business consulting',
        education: 'MBA, INSEAD'
      },
      cv: '/cvs/advisor10.pdf'
    },
    {
      id: 15,
      name: 'Ms. Tania Rahman',
      role: 'Advisor',
      category: 'Consultants',
      image: '/images/consultant1.png',
      bio: 'Ms. Tania Rahman is a development consultant specializing in gender and social equity with over 8 years of experience in gender equity, social development, and program management. She has implemented numerous gender-focused development programs.',
      details: {
        expertise: 'Gender Equity, Social Development, Program Management',
        experience: '8+ years in development consulting',
        education: 'MA in Gender Studies, University of Dhaka'
      },
      cv: '/cvs/consultant1.pdf'
    },
    {
      id: 16,
      name: 'Mr. Hasan Mahmud',
      role: 'Advisor',
      category: 'Consultants',
      image: '/images/consultant2.png',
      bio: 'Mr. Hasan Mahmud is a technology consultant specializing in digital transformation with over 7 years of experience in digital transformation, IT strategy, and system architecture. He has led multiple digital transformation projects.',
      details: {
        expertise: 'Digital Transformation, IT Strategy, System Architecture',
        experience: '7+ years in technology consulting',
        education: 'MS in Computer Science, BUET'
      },
      cv: '/cvs/consultant2.pdf'
    },
    {
      id: 17,
      name: 'Ms. Sabrina Khan',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant3.png',
      bio: 'Ms. Sabrina Khan is a research consultant specializing in policy analysis with over 6 years of experience in policy research, data analysis, and impact evaluation. She has conducted numerous research studies for development organizations.',
      details: {
        expertise: 'Policy Research, Data Analysis, Impact Evaluation',
        experience: '6+ years in research consulting',
        education: 'MA in Economics, University of Dhaka'
      },
      cv: '/cvs/consultant3.pdf'
    },
    {
      id: 18,
      name: 'Mr. Faisal Ahmed',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant4.png',
      bio: 'Mr. Faisal Ahmed is a finance consultant specializing in financial inclusion with over 9 years of experience in financial inclusion, microfinance, and banking. He has worked with leading microfinance institutions in Bangladesh.',
      details: {
        expertise: 'Financial Inclusion, Microfinance, Banking',
        experience: '9+ years in finance consulting',
        education: 'MBA, IBA Dhaka'
      },
      cv: '/cvs/consultant4.pdf'
    },
    {
      id: 19,
      name: 'Ms. Nasrin Sultana',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant5.png',
      bio: 'Ms. Nasrin Sultana is a media consultant specializing in strategic communications with over 7 years of experience in strategic communications, media relations, and content development. She has managed communications for major development projects.',
      details: {
        expertise: 'Strategic Communications, Media Relations, Content Development',
        experience: '7+ years in media consulting',
        education: 'MA in Mass Communication, University of Dhaka'
      },
      cv: '/cvs/consultant5.pdf'
    },
    {
      id: 20,
      name: 'Mr. Shafiqur Rahman',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant6.png',
      bio: 'Mr. Shafiqur Rahman is an environmental consultant specializing in sustainability with over 6 years of experience in sustainability, environmental impact assessment, and climate action. He has conducted numerous environmental assessments.',
      details: {
        expertise: 'Sustainability, Environmental Impact Assessment, Climate Action',
        experience: '6+ years in environmental consulting',
        education: 'MS in Environmental Science, BUET'
      },
      cv: '/cvs/consultant6.pdf'
    },
    {
      id: 21,
      name: 'Ms. Laila Akhter',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant7.png',
      bio: 'Ms. Laila Akhter is a training consultant specializing in capacity building with over 8 years of experience in capacity building, training design, and human resource development. She has designed training programs for diverse organizations.',
      details: {
        expertise: 'Capacity Building, Training Design, Human Resource Development',
        experience: '8+ years in training consulting',
        education: 'MA in Education, University of Dhaka'
      },
      cv: '/cvs/consultant7.pdf'
    },
    {
      id: 22,
      name: 'Mr. Jahangir Alam',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant8.png',
      bio: 'Mr. Jahangir Alam is a business consultant specializing in SME development with over 10 years of experience in SME development, business strategy, and entrepreneurship. He has helped numerous small businesses grow and succeed.',
      details: {
        expertise: 'SME Development, Business Strategy, Entrepreneurship',
        experience: '10+ years in business consulting',
        education: 'MBA, University of Dhaka'
      },
      cv: '/cvs/consultant8.pdf'
    },
    {
      id: 23,
      name: 'Ms. Shamsun Nahar',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant9.png',
      bio: 'Ms. Shamsun Nahar is a policy consultant specializing in governance with over 7 years of experience in governance, public policy, and institutional development. She has advised on policy reforms and institutional strengthening.',
      details: {
        expertise: 'Governance, Public Policy, Institutional Development',
        experience: '7+ years in policy consulting',
        education: 'MA in Public Policy, University of Dhaka'
      },
      cv: '/cvs/consultant9.pdf'
    },
    {
      id: 24,
      name: 'Mr. Zainul Abedin',
      role: 'Consultant',
      category: 'Consultants',
      image: '/images/consultant10.png',
      bio: 'Mr. Zainul Abedin is a technology consultant specializing in software development with over 6 years of experience in software development, web applications, and database management. He has developed numerous web and mobile applications.',
      details: {
        expertise: 'Software Development, Web Applications, Database Management',
        experience: '6+ years in technology consulting',
        education: 'BS in Computer Science, BUET'
      },
      cv: '/cvs/consultant10.pdf'
    }
  ];

  // Filter members based on selected category
  const getFilteredMembers = () => {
    return teamMembers.filter(member => member.category === selectedCategory);
  };

  // ============================================
  // FOCUS AREAS DATA
  // ============================================
  const focusAreas = [
    {
      img: '/images/gender.png',
      alt: 'Gender & Social Equity',
      title: <>Gender &amp; Social Equity</>,
      description: 'Promoting equality and social justice through inclusive policies and programs'
    },
    {
      img: '/images/money.png',
      alt: 'Economics & Finance',
      title: <>Economics &amp; Finance</>,
      description: 'Driving economic growth and financial inclusion through strategic solutions'
    },
    {
      img: '/images/ET.png',
      alt: 'Engineering & Technology',
      title: <>Engineering &amp; Technology</>,
      description: 'Leveraging innovation and technical expertise for sustainable development'
    },
    {
      img: '/images/mc.png',
      alt: 'Media & Communication',
      title: <>Media &amp; Communication</>,
      description: 'Amplifying voices and shaping narratives through strategic communication'
    },
    {
      img: '/images/environment.jpg',
      alt: 'Environment & Sustainability',
      title: <>Environment &amp; Sustainability</>,
      description: 'Building a greener future through environmental stewardship and sustainable practices'
    }
  ];

  const focusTotal = focusAreas.length;
  const focusPrev = () => setFocusIndex((i) => (i === 0 ? focusTotal - 1 : i - 1));
  const focusNext = () => setFocusIndex((i) => (i === focusTotal - 1 ? 0 : i + 1));

  // ============================================
  // TEAM CAROUSEL — continuous with auto category switch
  // ============================================
  const categoryOrder = ['Board of Directors', 'Advisors'];
  const filteredMembers = getFilteredMembers();
  const teamTotal = filteredMembers.length;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setTeamIndex(0);
  };

  const teamPrev = () => {
    const members = getFilteredMembers();
    const total = members.length;
    const currentCategoryIndex = categoryOrder.indexOf(selectedCategory);

    if (teamIndex === 0) {
      const prevCategoryIndex =
        currentCategoryIndex === 0
          ? categoryOrder.length - 1
          : currentCategoryIndex - 1;
      const prevCategory = categoryOrder[prevCategoryIndex];
      const prevMembers = teamMembers.filter((m) => m.category === prevCategory);
      setSelectedCategory(prevCategory);
      setTeamIndex(prevMembers.length - 1);
    } else {
      setTeamIndex((i) => i - 1);
    }
  };

  const teamNext = () => {
    const members = getFilteredMembers();
    const total = members.length;
    const currentCategoryIndex = categoryOrder.indexOf(selectedCategory);

    if (teamIndex === total - 1) {
      const nextCategoryIndex =
        currentCategoryIndex === categoryOrder.length - 1
          ? 0
          : currentCategoryIndex + 1;
      const nextCategory = categoryOrder[nextCategoryIndex];
      setSelectedCategory(nextCategory);
      setTeamIndex(0);
    } else {
      setTeamIndex((i) => i + 1);
    }
  };

  // ============================================
  // NEWS & EVENTS DATA
  // ============================================
  const newsData = {
    'inception-meeting': {
      id: 'inception-meeting',
      tag: 'Inception Meeting',
      title: 'Inception Meeting: Planning for the Gender Center of Excellence for Financial Inclusion',
      date: 'September 22, 2025',
      location: 'Dhaka, Bangladesh',
      heroImage: '/images/1.jpeg',
      excerpt: 'Gunee Bangladesh Ltd. successfully convened the Inception Meeting for the initiative titled "Planning for the Gender Center of Excellence for Financial Inclusion." The initiative is funded by the Gates Foundation and aims to establish a strong strategic foundation for advancing gender-responsive and inclusive financial systems.',
      content: `
        <p><strong>Gunee Bangladesh Ltd.</strong> successfully convened the Inception Meeting for the initiative titled <strong>"Planning for the Gender Center of Excellence for Financial Inclusion."</strong> The initiative is funded by the Gates Foundation and aims to establish a strong strategic foundation for advancing gender-responsive and inclusive financial systems.</p>

        <p>The meeting brought together key stakeholders, experts, and project representatives to discuss the initiative's objectives, proposed approach, scope of work, implementation framework, and expected outcomes. Participants shared valuable perspectives on the existing gender and financial inclusion landscape, institutional priorities, and potential areas of collaboration.</p>

        <p>The discussions helped align stakeholder expectations, refine the project methodology, and identify the key research, consultation, and planning activities required for developing the proposed Gender Center of Excellence for Financial Inclusion.</p>

        <p>The insights gathered during the meeting will guide the subsequent phases of the initiative and support the development of an inclusive, evidence-based, and sustainable institutional framework.</p>
      `,
      gallery: [
        { id: 0, src: '/images/1.jpeg', alt: 'Group discussion' },
        { id: 1, src: '/images/2.png', alt: 'Presentation' },
        { id: 2, src: '/images/22.jpg', alt: 'Workshop session' },
        { id: 3, src: '/images/2222.jpg', alt: 'Stakeholders meeting' },
        { id: 4, src: '/images/i1.jpg', alt: 'Feedback session' },
        { id: 5, src: '/images/i2.jpg', alt: 'Collaboration' },
        { id: 6, src: '/images/i3.jpg', alt: 'Roundtable discussion' },
        { id: 7, src: '/images/i4.jpg', alt: 'Keynote speech' },
      ],
      hashtags: ['GenderCenterOfExcellence', 'FinancialInclusion', 'GenderEquality', 'InclusiveFinance', 'InceptionMeeting', 'StakeholderEngagement', 'GuneeBangladesh', 'GatesFoundation', 'GenderResponsiveFinance', 'EconomicEmpowerment']
    },
    'inception-workshop': {
      id: 'inception-workshop',
      tag: 'Workshop',
      title: 'Workshop on the Inception Report: Planning for the Gender Center of Excellence for Financial Inclusion',
      date: 'October 15, 2025',
      location: 'Dhaka, Bangladesh',
      heroImage: '/images/2.png',
      excerpt: 'Gunee Bangladesh Ltd. organized a stakeholder workshop on the Inception Report prepared under the initiative "Planning for the Gender Center of Excellence for Financial Inclusion," funded by the Gates Foundation.',
      content: `
        <p><strong>Gunee Bangladesh Ltd.</strong> organized a stakeholder workshop on the Inception Report prepared under the initiative <strong>"Planning for the Gender Center of Excellence for Financial Inclusion,"</strong> funded by the Gates Foundation.</p>

        <p>The workshop provided a collaborative platform to present and review the proposed vision, objectives, methodology, stakeholder engagement approach, work plan, and institutional framework outlined in the Inception Report. Participants contributed valuable feedback on the strategic direction and operational considerations for establishing the Gender Center of Excellence.</p>

        <p>The discussions highlighted the importance of evidence-based research, meaningful stakeholder participation, institutional collaboration, and gender-responsive approaches in addressing the persistent barriers faced by women and underserved groups in accessing and benefiting from financial services.</p>

        <p>The recommendations received during the workshop will be incorporated into the Inception Report and will inform the next stages of planning and development of the Center.</p>
      `,
      gallery: [
        { id: 0, src: '/images/w1.jpg', alt: 'Group discussion' },
        { id: 1, src: '/images/w2.jpg', alt: 'Presentation' },
        { id: 2, src: '/images/w3.jpg', alt: 'Workshop session' },
        { id: 3, src: '/images/w4.jpg', alt: 'Stakeholders meeting' },
        { id: 4, src: '/images/w5.jpg', alt: 'Feedback session' },
        { id: 5, src: '/images/w6.jpg', alt: 'Collaboration' },
        { id: 6, src: '/images/w7.jpg', alt: 'Roundtable discussion' },
        { id: 7, src: '/images/w8.jpg', alt: 'Keynote speech' },
      ],
      hashtags: ['InceptionReport', 'GenderCenterOfExcellence', 'FinancialInclusion', 'InclusiveFinance', 'GenderEquality', 'StakeholderWorkshop', 'GuneeBangladesh', 'GatesFoundation', 'WomenEconomicEmpowerment', 'GenderResponsiveFinance']
    }
  };

  const newsEvents = [
    {
      id: 1,
      title: 'Inception Meeting: Planning for the Gender Center of Excellence for Financial Inclusion',
      date: 'September 22, 2025',
      category: 'Meeting',
      image: '/images/1.jpeg',
      excerpt: 'Gunee Bangladesh Ltd. successfully convened the Inception Meeting for the initiative titled "Planning for the Gender Center of Excellence for Financial Inclusion." The initiative is funded by the Gates Foundation and aims to establish a strong strategic foundation for advancing gender-responsive and inclusive financial systems.',
      link: '#',
      newsId: 'inception-meeting'
    },
    {
      id: 2,
      title: 'Workshop on the Inception Report: Planning for the Gender Center of Excellence for Financial Inclusion',
      date: 'October 15, 2025',
      category: 'Workshop',
      image: '/images/2.png',
      excerpt: 'Gunee Bangladesh Ltd. organized a stakeholder workshop on the Inception Report prepared under the initiative "Planning for the Gender Center of Excellence for Financial Inclusion," funded by the Gates Foundation.',
      link: '#',
      newsId: 'inception-workshop'
    }
  ];

  // ============================================
  // SHARE FUNCTIONS
  // ============================================
  const shareOnFacebook = (title) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnTwitter = (title, hashtags) => {
    const hashtagString = hashtags ? hashtags.join(',') : '';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}&hashtags=${hashtagString}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnWhatsApp = (title) => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + window.location.href)}`, '_blank');
  };

  const shareViaEmail = (title) => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(title + '\n\n' + window.location.href)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareTooltip(true);
    setTimeout(() => setShareTooltip(false), 2000);
  };

  const handleNewsReadMore = (newsId) => {
    if (newsId && newsData[newsId]) {
      setSelectedNewsId(newsId);
      setShowNewsDetail(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsBack = () => {
    setShowNewsDetail(false);
    setSelectedNewsId(null);
    setTimeout(() => {
      const newsSection = document.getElementById('news');
      if (newsSection) {
        const offset = 80;
        const elementPosition = newsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const currentNews = selectedNewsId ? newsData[selectedNewsId] : null;

  if (showNewsDetail && currentNews) {
    return (
      <div className="news-detail-wrapper">
        <section className="news-hero-section" style={{ backgroundImage: `url(${currentNews.heroImage})` }}>
          <div className="news-hero-overlay"></div>
          <div className="news-hero-content">
            <div className="news-hero-back-wrapper">
              <button className="news-hero-back" onClick={handleNewsBack}>
                <span className="news-hero-back-icon">←</span> Back to News
              </button>
            </div>
            <div className="news-hero-center-content">
              <h1 className="news-hero-title">{currentNews.title}</h1>
              <div className="news-hero-meta">
                <span><span className="news-hero-icon">📅</span> {currentNews.date}</span>
                <span><span className="news-hero-icon">📍</span> {currentNews.location}</span>
              </div>
              <div className="news-hero-share">
                <span className="news-hero-share-label">Share this</span>
                <div className="news-hero-share-buttons">
                  <button onClick={() => shareOnFacebook(currentNews.title)} className="news-hero-share-btn facebook" title="Share on Facebook"><span>f</span></button>
                  <button onClick={() => shareOnTwitter(currentNews.title, currentNews.hashtags)} className="news-hero-share-btn twitter" title="Share on Twitter"><span>𝕏</span></button>
                  <button onClick={shareOnLinkedIn} className="news-hero-share-btn linkedin" title="Share on LinkedIn"><span>in</span></button>
                  <button onClick={() => shareOnWhatsApp(currentNews.title)} className="news-hero-share-btn whatsapp" title="Share on WhatsApp"><span>💬</span></button>
                  <button onClick={() => shareViaEmail(currentNews.title)} className="news-hero-share-btn email" title="Share via Email"><span>✉</span></button>
                  <button onClick={handlePrint} className="news-hero-share-btn print" title="Print"><span>🖨</span></button>
                  <div className="news-hero-copy-container">
                    <button onClick={copyToClipboard} className="news-hero-share-btn copy" title="Copy link"><span>🔗</span></button>
                    {shareTooltip && <span className="news-hero-copy-tooltip">Copied!</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-detail-body-section">
          <div className="news-detail-container">
            <div className="news-detail-content-wrapper">
              <div className="news-detail-body" dangerouslySetInnerHTML={{ __html: currentNews.content }} />
              <div className="news-detail-hashtags">
                {currentNews.hashtags.map((tag, index) => (
                  <span key={index} className="news-detail-hashtag">#{tag}</span>
                ))}
              </div>
              <div className="news-detail-gallery">
                <div className="news-gallery-label">
                  <span className="news-gallery-icon">🖼</span> Event Gallery
                </div>
                <div className="news-marquee-line">
                  {[...currentNews.gallery, ...currentNews.gallery, ...currentNews.gallery].map((img, idx) => (
                    <div className="news-marquee-item" key={`r-${idx}`}>
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="news-marquee-line reverse">
                  {[...currentNews.gallery, ...currentNews.gallery, ...currentNews.gallery].map((img, idx) => (
                    <div className="news-marquee-item" key={`l-${idx}`}>
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-left">
                <div className="footer-brand">
                  <img src="/images/logo.png" alt="Gunee Bangladesh" className="footer-logo" />
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-address-row">
                  <p className="footer-address">
                    Address: Plot 68-71, Road 4, Rupnagar Industrial Area, Section 2, Mirpur, Dhaka, Bangladesh
                  </p>
                </div>
                <div className="footer-links-row">
                  <div className="footer-links">
                    <a href="#team" className="footer-link">Meet the Team</a>
                    <span className="footer-divider">|</span>
                    <a href="#service" className="footer-link">Explore Our Services</a>
                  </div>
                  <div className="footer-social">
                    <button onClick={openGmail} className="footer-social-link" aria-label="Email">✉️</button>
                    <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
                    <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Gunee Bangladesh Limited. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-container">
          <video src="/images/bg.mp4" className="hero-bg-image" autoPlay loop muted playsInline />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-logo">
          <a href="#hero" className="logo-wrap">
            <div className="logo-icon">
              <img src="/images/logo1.png" alt="Gunee Bangladesh Logo" className="logo-img" />
            </div>
          </a>
        </div>
        <div className="hero-content">
          <h3 className="hero-title">
            <span className="title-line1">Transforming Bangladesh through</span>
            <span className="title-line2">Expertise, Innovation, and Equity</span>
          </h3>
          <div className="cards-container">
            <div className="card-wrapper">
              <div className="card-image-wrapper">
                <img src="/images/research1.png" alt="Research" className="card-image" />
              </div>
              <div className="card"><h3 className="card-title">Research</h3></div>
            </div>
            <div className="card-wrapper">
              <div className="card-image-wrapper">
                <img src="/images/training1.png" alt="Training" className="card-image" />
              </div>
              <div className="card"><h3 className="card-title">Training</h3></div>
            </div>
            <div className="card-wrapper">
              <div className="card-image-wrapper">
                <img src="/images/cons1.png" alt="Consulting" className="card-image" />
              </div>
              <div className="card"><h3 className="card-title">Consulting</h3></div>
            </div>
          </div>
          <div className="excellence-container">
            <div className="excellence-content">
              <h2 className="excellence-title-single">Born from Excellence, Built for Impact.</h2>
              <p className="excellence-description">
                Gunee Bangladesh Limited is a new initiative powered by experts previously hailing from Dhaka University, Bangladesh Bank, and BUET. Our team has delivered impact across sectors including gender, economics, and technology – nationally and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-vision-header">
            <h2 className="mission-vision-title">
              <span className="mission-vision-title-line1">Our</span>
              <span className="mission-vision-title-line2">Mission &amp; Vision</span>
            </h2>
          </div>
          <div className="mission-vision-grid">
            <div className="mission-vision-card mission-card">
              <h3 className="mission-vision-card-title">🎯 Our Mission</h3>
              <p className="mission-vision-card-text">
                To drive transformative change in Bangladesh through evidence-based research, innovative training, and strategic consulting that promotes gender equity, financial inclusion, and sustainable development.
              </p>
            </div>
            <div className="mission-vision-card vision-card">
              <h3 className="mission-vision-card-title">💡 Our Vision</h3>
              <p className="mission-vision-card-text">
                A Bangladesh where every individual, regardless of gender or background, has equal access to economic opportunities, financial services, and the tools needed to build a prosperous and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="focus-areas-section">
        <div className="focus-areas-container">
          <div className="focus-header-row">
            <h2 className="focus-title">
              <span className="focus-title-line1">Our</span>{' '}
              <span className="focus-title-line2">Focus Areas</span>
            </h2>
            <div className="focus-header-arrows">
              <button type="button" className="focus-nav-arrow prev" onClick={focusPrev} aria-label="Previous focus area">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button type="button" className="focus-nav-arrow next" onClick={focusNext} aria-label="Next focus area">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="focus-carousel-wrapper">
            <div className="focus-grid" style={{ transform: `translateX(-${focusIndex * 100}%)` }}>
              {focusAreas.map((area, index) => (
                <div key={index} className={`focus-card ${index === focusIndex ? 'active' : ''}`}>
                  <div className="focus-image-wrapper">
                    <img src={area.img} alt={area.alt} className="focus-card-image" />
                  </div>
                  <div className="focus-card-content">
                    <h3 className="focus-card-title">{area.title}</h3>
                    <p className="focus-card-description">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="focus-dots">
            {focusAreas.map((_, index) => (
              <button key={index} type="button" className={`focus-dot ${index === focusIndex ? 'active' : ''}`} onClick={() => setFocusIndex(index)} aria-label={`Go to focus area ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section1">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">
              <span className="services-title-line1">Our</span>
              <span className="services-title-line2">Services</span>
            </h2>
          </div>
          <div className="services-accordion">
            {serviceData.map((service, index) => (
              <div className="service-item" key={service.id}>
                <div className="service-item-header" onClick={() => toggleService(activeService === index ? null : index)}>
                  <h3 className="service-item-title">{service.title}</h3>
                  <button className={`service-toggle-btn ${activeService === index ? 'active' : ''}`} onClick={() => toggleService(activeService === index ? null : index)} aria-label={`Toggle ${service.title} details`}>
                    {activeService === index ? '−' : '+'}
                  </button>
                </div>
                <div className={`service-item-content ${activeService === index ? 'active' : ''}`}>
                  <p className="service-description">{service.description}</p>
                  <div className="service-points">
                    {service.points.map((point, i) => (
                      <span className="service-point" key={i}>{point}</span>
                    ))}
                  </div>
                </div>
                {index < serviceData.length - 1 && <div className="service-divider"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section" id="team">
        <div className="team-container">

          <div className="team-header-row">
            <h2 className="team-title">
              <span className="team-title-line1">Meet</span>
              <span className="team-title-line2">Our Team</span>
            </h2>
            <div className="team-header-arrows">
              <button type="button" className="team-nav-arrow prev" onClick={teamPrev} aria-label="Previous team member">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button type="button" className="team-nav-arrow next" onClick={teamNext} aria-label="Next team member">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="team-category-tabs">
            <button
              className={`category-tab ${selectedCategory === 'Board of Directors' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Board of Directors')}
            >
              Board of Directors
            </button>
            <button
              className={`category-tab ${selectedCategory === 'Advisors' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Advisors')}
            >
              Resource Pool
            </button>
          </div>

          <div className="team-carousel-wrapper">
            <div
              className="team-grid"
              style={{ transform: `translateX(-${teamIndex * 100}%)` }}
            >
              {getFilteredMembers().map((member, index) => (
                <div
                  key={member.id}
                  className={`team-member ${index === teamIndex ? 'active' : ''}`}
                  onClick={() => toggleMember(member.id)}
                >
                  <div className="team-member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-member-overlay">
                      <span className="view-details">View Details</span>
                    </div>
                  </div>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="team-dots">
            {getFilteredMembers().map((_, index) => (
              <button
                key={index}
                type="button"
                className={`team-dot ${index === teamIndex ? 'active' : ''}`}
                onClick={() => setTeamIndex(index)}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM MODAL */}
      <div
        className={`team-member-modal ${activeMember !== null ? 'active' : ''}`}
        onClick={() => setActiveMember(null)}
      >
        <div className="team-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={() => setActiveMember(null)}>✕</button>
          {activeMember !== null && (
            <>
              <div className="modal-image-wrapper">
                <img src={teamMembers[activeMember].image} alt={teamMembers[activeMember].name} />
              </div>
              <div className="modal-body">
                <h3 className="modal-name">
                  {teamMembers[activeMember].name}
                </h3>
                <p className="modal-role">
                  {teamMembers[activeMember].role}
                </p>
                <div className="modal-divider"></div>
                <div className="modal-bio">
                  <div className="bio-section">
                    <h4 className="bio-heading">Professional Bio</h4>
                    <p className="bio-text">
                      {teamMembers[activeMember].bio}
                    </p>
                  </div>
                </div>
                <button
                  className="modal-download-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(teamMembers[activeMember].cv, '_blank');
                  }}
                >
                  📄 Download CV
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* NEWS & EVENTS */}
      <section className="news-section" id="news">
        <div className="news-container">
          <div className="news-header">
            <h2 className="news-title">
              <span className="news-title-line1">News &amp;</span>
              <span className="news-title-line2">Events</span>
            </h2>
          </div>
          <div className="news-grid">
            {newsEvents.map((item) => (
              <div className="news-card" key={item.id}>
                <div className="news-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-image" />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <button className="news-read-more" onClick={() => handleNewsReadMore(item.newsId || item.id)}>
                    Read More <span className="news-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="publications-section">
        <div className="publications-container">
          <div className="publications-header">
            <h2 className="publications-title">
              <span className="publications-title-line1">Recent Publications</span>
              <span className="publications-title-line2">Authored by Members of the Team</span>
            </h2>
          </div>
          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-image">
                <img src="/images/book111.png" alt="Towards Inclusive Transformation" />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  Towards Inclusive Transformation: A study on gender gap in financial inclusion in Bangladesh
                </h3>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-image">
                <img src="/images/book3.png" alt="Women and Hijras in Bangladesh News Media" />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  Women and Hijras in Bangladesh News Media
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              <span className="contact-title-line1">Get In</span>
              <span className="contact-title-line2">Touch With Us</span>
            </h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Contact Information</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Address</h4>
                    <p>Plot 68-71, Road 4, Rupnagar Industrial Area, Section 2, Mirpur, Dhaka</p>
                  </div>
                </div>
                <div className="contact-info-item contact-info-row">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p>+880 1712 988 982</p>
                  </div>
                </div>
                <div className="contact-info-item contact-info-row">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p> guneebd@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Working Hours</h4>
                    <p>Sun - Thu: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="contact-social-links">
                  <div className="contact-social-icons">
                    <a href="#" className="contact-social-icon" aria-label="Facebook">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="contact-social-icon" aria-label="Twitter">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="contact-social-icon" aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="contact-social-icon" aria-label="YouTube">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="contact-map-wrapper">
                  <div className="contact-map-container">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.199902152171!2d90.35549427353867!3d23.81148958643171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15fb6bce8d7%3A0x207f30ae9ebec5f3!2zQ29udmluY2UgR3JvdXAg4KaV4Kao4Kat4Ka_4Kao4KeN4Ka4IOCml-CnjeCmsOCngeCmqg!5e0!3m2!1sen!2sbd!4v1785236251024!5m2!1sen!2sbd" 
                      width="100%" 
                      height="140" 
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gunee Bangladesh Office Location"
                    ></iframe>
                  </div>
                  <div className="contact-map-actions">
                    <a href="https://maps.google.com/maps?q=Plot+68-71,+Road+4,+Rupnagar+Industrial+Area,+Section+2,+Mirpur,+Dhaka" target="_blank" rel="noopener noreferrer" className="contact-map-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>Directions</span>
                    </a>
                    <a href="https://www.google.com/maps/place/Plot+68-71,+Road+4,+Rupnagar+Industrial+Area,+Section+2,+Mirpur,+Dhaka" target="_blank" rel="noopener noreferrer" className="contact-map-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"/>
                        <polyline points="9 21 3 21 3 15"/>
                        <line x1="21" y1="3" x2="14" y2="10"/>
                        <line x1="3" y1="21" x2="10" y2="14"/>
                      </svg>
                      <span>Open Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <h3 className="contact-form-title">Send Us a Message</h3>
                <p className="contact-form-subtitle">Fill out the form below and we'll get back to you shortly.</p>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                      <input type="text" id="fullName" placeholder="Enter your full name" className="contact-form-input" required />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
                      <input type="email" id="email" placeholder="Enter your email address" className="contact-form-input" required />
                    </div>
                  </div>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="Enter your phone number" className="contact-form-input" />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="subject">Subject <span className="required">*</span></label>
                      <input type="text" id="subject" placeholder="Enter message subject" className="contact-form-input" required />
                    </div>
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea id="message" rows="3" placeholder="Type your message here..." className="contact-form-textarea" required></textarea>
                  </div>
                  <button type="submit" className="contact-form-submit">
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-brand">
                <img src="/images/logo.png" alt="Gunee Bangladesh" className="footer-logo" />
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-address-row">
                <p className="footer-address">
                  Address: Plot 68-71, Road 4, Rupnagar Industrial Area, Section 2, Mirpur, Dhaka, Bangladesh
                </p>
              </div>
              <div className="footer-links-row">
                <div className="footer-links">
                  <a href="#team" className="footer-link">Meet the Team</a>
                  <span className="footer-divider">|</span>
                  <a href="#service" className="footer-link">Explore Our Services</a>
                </div>
                <div className="footer-social">
                  <button onClick={openGmail} className="footer-social-link" aria-label="Email">✉️</button>
                  <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
                  <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Gunee Bangladesh Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;