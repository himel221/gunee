import React, { useState, useEffect } from 'react';
import './home.css';

function Home({ onNavigate, route }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Board of Directors');
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@gunee.com&su=${subject}&body=${body}`;
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
  // TEAM MEMBERS DATA (Full List)
  // ============================================
  const teamMembers = [
    // Board of Directors (id: 0-4)
    {
      id: 0,
      name: 'Rafez Alam Chowdhury',
      role: 'Chairman',
      category: 'Board of Directors',
      image: '/images/rafez.png',
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
      image: '/images/arif.png',
      bio: 'Arif Jawad Siam is an environmental policy expert and Director at Gunee Bangladesh Limited, dedicated to advancing sustainability and climate action. He holds a Master\'s degree in Environmental Science from BUET and has over 6 years of experience in environmental research and consulting. Arif has worked extensively on climate change adaptation, environmental impact assessments, and sustainable development initiatives across Bangladesh. His work has contributed to shaping environmental policies and strategies for both government and non-government organizations. He is passionate about building a greener future and has been actively involved in community-based environmental awareness programs, making significant contributions to environmental conservation and sustainable development in the region.',
      details: {
        expertise: 'Environmental Policy, Sustainability, Climate Change',
        experience: '6+ years in environmental research and consulting',
        education: "Master's in Environmental Science, BUET"
      },
      cv: '/cvs/arif.pdf'
    },
    // Advisors (id: 5-14)
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
    // Consultants (id: 15-24)
    {
      id: 15,
      name: 'Ms. Tania Rahman',
      role: 'Consultant',
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
      role: 'Consultant',
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
  // NEWS & EVENTS DATA
  // ============================================
  const newsEvents = [
    {
      id: 1,
      title: 'Gunee Bangladesh Launches New Training Program for Women Entrepreneurs',
      date: 'June 15, 2026',
      category: 'Event',
      image: '/images/news1.jpg',
      excerpt: 'A new capacity building initiative aimed at empowering women entrepreneurs across Bangladesh with essential business and leadership skills.',
      link: '#'
    },
    {
      id: 2,
      title: 'Research Report on Financial Inclusion Published',
      date: 'June 10, 2026',
      category: 'Publication',
      image: '/images/news2.jpg',
      excerpt: 'Our team has released a comprehensive study on gender gap in financial inclusion, highlighting key challenges and recommendations for policy reform.',
      link: '#'
    },
    {
      id: 3,
      title: 'Gunee Bangladesh Signs MOU with Leading Development Organization',
      date: 'June 5, 2026',
      category: 'Partnership',
      image: '/images/news3.jpg',
      excerpt: 'Strategic partnership agreement signed to collaborate on sustainable development projects focusing on gender equity and economic empowerment.',
      link: '#'
    }
  ];

  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="hero-section">
        <div className="hero-bg-container">
          <video 
            src="/images/bg.mp4" 
            className="hero-bg-image"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-logo">
          <a href="#hero" className="logo-wrap">
            <div className="logo-icon">
              <img 
                src="/images/logo1.png" 
                alt="Gunee Bangladesh Logo"
                className="logo-img"
              />
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
                <img 
                  src="/images/research1.png" 
                  alt="Research"
                  className="card-image"
                />
              </div>
              <div className="card">
                <h3 className="card-title">Research</h3>
              </div>
            </div>
            
            <div className="card-wrapper">
              <div className="card-image-wrapper">
                <img 
                  src="/images/training1.png" 
                  alt="Training"
                  className="card-image"
                />
              </div>
              <div className="card">
                <h3 className="card-title">Training</h3>
              </div>
            </div>
            
            <div className="card-wrapper">
              <div className="card-image-wrapper">
                <img 
                  src="/images/cons1.png" 
                  alt="Consulting"
                  className="card-image"
                />
              </div>
              <div className="card">
                <h3 className="card-title">Consulting</h3>
              </div>
            </div>
          </div>

          <div className="excellence-container">
            <div className="excellence-content">
              <h2 className="excellence-title-single">
                Born from Excellence, Built for Impact.
              </h2>
              <p className="excellence-description">
                Gunee Bangladesh Limited is a new initiative powered by experts previously hailing from Dhaka University, Bangladesh Bank, and BUET. Our team has delivered impact across sectors including gender, economics, and technology – nationally and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOCUS AREAS SECTION
          ============================================ */}
      <section className="focus-areas-section">
        <div className="focus-areas-container">
          <div className="focus-header">
            <h2 className="focus-title">
              <span className="focus-title-line1">Our</span>
              <span className="focus-title-line2">Focus Areas</span>
            </h2>
          </div>

          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-image-wrapper">
                <img 
                  src="/images/gender.png" 
                  alt="Gender & Social Equity"
                  className="focus-card-image"
                />
              </div>
              <h3 className="focus-card-title">Gender &amp;<br />Social Equity</h3>
              <p className="focus-card-description">
                Promoting equality and social justice through inclusive policies and programs
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-image-wrapper">
                <img 
                  src="/images/money.png" 
                  alt="Economics & Finance"
                  className="focus-card-image"
                />
              </div>
              <h3 className="focus-card-title">Economics &amp;<br />Finance</h3>
              <p className="focus-card-description">
                Driving economic growth and financial inclusion through strategic solutions
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-image-wrapper">
                <img 
                  src="/images/ET.png" 
                  alt="Engineering & Technology"
                  className="focus-card-image"
                />
              </div>
              <h3 className="focus-card-title">Engineering &amp;<br />Technology</h3>
              <p className="focus-card-description">
                Leveraging innovation and technical expertise for sustainable development
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-image-wrapper">
                <img 
                  src="/images/mc.png" 
                  alt="Media & Communication"
                  className="focus-card-image"
                />
              </div>
              <h3 className="focus-card-title">Media &amp;<br />Communication</h3>
              <p className="focus-card-description">
                Amplifying voices and shaping narratives through strategic communication
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-image-wrapper">
                <img 
                  src="/images/environment.jpg" 
                  alt="Environment & Sustainability"
                  className="focus-card-image"
                />
              </div>
              <h3 className="focus-card-title">Environment &amp;<br />Sustainability</h3>
              <p className="focus-card-description">
                Building a greener future through environmental stewardship and sustainable practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION - ACCORDION LIST
          ============================================ */}
      <section className="services-section1">
        <div className="services-container">
          <div className="focus-header">
            <h2 className="focus-title">
              <span className="focus-title-line1">Our</span>
              <span className="focus-title-line2">Services</span>
            </h2>
          </div>

          <div className="services-accordion">
            {serviceData.map((service, index) => (
              <div className="service-item" key={service.id}>
                <div 
                  className="service-item-header"
                  onClick={() => toggleService(activeService === index ? null : index)}
                >
                  <h3 className="service-item-title">{service.title}</h3>
                  <button 
                    className={`service-toggle-btn ${activeService === index ? 'active' : ''}`}
                    onClick={() => toggleService(activeService === index ? null : index)}
                    aria-label={`Toggle ${service.title} details`}
                  >
                    {activeService === index ? '−' : '+'}
                  </button>
                </div>
                <div className={`service-item-content ${activeService === index ? 'active' : ''}`}>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-points">
                    {service.points.map((point, i) => (
                      <li className="service-point" key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                {index < serviceData.length - 1 && <div className="service-divider"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM SECTION
          ============================================ */}
      <section className="team-section" id="team">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">
              <span className="team-title-line1">Meet</span>
              <span className="team-title-line2">Our Team</span>
            </h2>
          </div>

          <div className="team-category-tabs">
            <button 
              className={`category-tab ${selectedCategory === 'Board of Directors' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Board of Directors')}
            >
              Board of Directors
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'Advisors' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Advisors')}
            >
              Advisors
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'Consultants' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Consultants')}
            >
              Consultants
            </button>
          </div>

          <div className="team-grid">
            {getFilteredMembers().map((member) => (
              <div 
                key={member.id}
                className="team-member" 
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
      </section>

      {/* ============================================
          TEAM MODAL
          ============================================ */}
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
                <h3 className="modal-name" style={{ 
                  fontWeight: 'bold', 
                  color: '#66588F',
                  fontSize: '2.2rem',
                  marginBottom: '2px',
                  lineHeight: '1.2'
                }}>
                  {teamMembers[activeMember].name}
                </h3>
                <p className="modal-role" style={{ 
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  color: '#475569'
                }}>
                  {teamMembers[activeMember].role}
                </p>
                <div className="modal-divider" style={{ marginBottom: '12px' }}></div>
                
                <div className="modal-bio">
                  <div className="bio-section">
                    <h4 className="bio-heading" style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#0f172a',
                      marginBottom: '6px',
                      letterSpacing: '0.02em'
                    }}>
                      Professional Bio
                    </h4>
                    <p className="bio-text" style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
                      color: '#334155',
                      margin: 0,
                      textAlign: 'justify'
                    }}>
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
                  style={{
                    marginTop: '16px',
                    padding: '0.9rem 2rem',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #66588F 0%, #4a3f6b 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 6px 25px rgba(102, 88, 143, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 10px 35px rgba(102, 88, 143, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 6px 25px rgba(102, 88, 143, 0.2)';
                  }}
                >
                  📄 Download CV
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ============================================
          NEWS & EVENTS SECTION
          ============================================ */}
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
                  <a href={item.link} className="news-read-more">
                    Read More <span className="news-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PUBLICATIONS SECTION
          ============================================ */}
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

      {/* ============================================
          FOOTER SECTION
          ============================================ */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-brand">
                <img 
                  src="/images/logo.png" 
                  alt="Gunee Bangladesh" 
                  className="footer-logo" 
                />
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
                  <button 
                    onClick={openGmail}
                    className="footer-social-link" 
                    aria-label="Email"
                  >
                    ✉️
                  </button>
                  <a href="#" className="footer-social-link" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#" className="footer-social-link" aria-label="Instagram">
                    📷
                  </a>
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