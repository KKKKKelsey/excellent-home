import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: 'Welcome to Our Renovation Service',
        subtitle: 'Transform Your Space with Professional Solutions',
        button: 'Get Started'
      },
      history: {
        title: "Company History and Team Qualifications",
        p1: "EXCELLENT HOME was founded by Quintin in 2013, who serves as the company's chief architect and visionary leader. Quintin's professional journey began in China, where he developed a solid foundation in architecture and construction. He later successfully established a commercial renovation company in Japan, further honing his professional skills and management experience.",
        p2: "During his years working in Japan, Quintin developed rigorous design thinking, precise project management capabilities, and exceptional space planning skills. Deeply influenced by the Japanese craftsmanship spirit, he formed unique craftsmanship standards and aesthetic pursuits. His deep understanding of Japanese design culture infuses his work with a sense of tranquility, elegance, and high functionality.",
        p3: "In 2016, Quintin immigrated to Canada, bringing his passion for design and architecture to Toronto, where he established EXCELLENT HOME. With his solid architectural technical background, he excels at solving complex space utilization problems and proposing reasonable structural renovation solutions within safety regulations, helping clients maximize their space's value and aesthetics.",
        p4: "Quintin not only provides guidance during the design process but personally supervises and coordinates every aspect of the project, ensuring smooth completion from concept to implementation, giving clients a worry-free experience. He always upholds a sincere service philosophy, often saying, 'Your satisfaction is my happiness.'",
        p5: "To help clients better visualize design effects, Quintin personally created EXCELLENT HOME's 1,800-square-foot showroom in Toronto. This carefully designed space allows clients to directly experience the unlimited possibilities of materials, craftsmanship, and design.",
        p6: "For Quintin, each project is a work of art. With extreme passion and precise craftsmanship, he is dedicated to transforming each space into a unique masterpiece."
      },
      projects: {
        title: "Our Projects",
        viewMore: "View More"
        // 添加项目展示的文本
      },
      services: {
        title: "Our Services",
        renovation: "Home Renovation",
        design: "Interior Design",
        consultation: "Free Consultation"
        // 添加服务相关文本
      },
      process: {
        title: "Our Process",
        step1: "Initial Consultation",
        step2: "Design Phase",
        step3: "Construction",
        step4: "Final Inspection"
        // 添加流程相关文本
      },
      partners: {
        title: "Our Partners"
        // 添加合作伙伴相关文本
      },
      guarantee: {
        title: "Our Guarantee",
        quality: "Quality Assurance",
        satisfaction: "100% Satisfaction"
        // 添加保证相关文本
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "What renovation services do you provide?",
        a1: "We provide comprehensive renovation services, including residential and commercial space design, interior renovation, project management, home renovation, kitchen and bathroom remodeling, flooring installation, painting, and other custom renovation services.",
        
        q2: "How do you calculate renovation quotes?",
        a2: "Our quotes are based on project size, material selection, design complexity, and construction duration. We provide detailed quotes to help you understand all costs involved.",
        
        q3: "Is the contract price fixed or are there potential additional costs?",
        a3: "Our contract prices are fixed and transparent. The quote clearly lists all costs, including materials and labor. If additional changes or new items are needed during construction, we will communicate with you in advance to ensure there are no hidden costs.",
        
        q4: "Can I live in my house during renovation?",
        a4: "It depends on the scale and scope of renovation. For small, partial renovations, you can usually continue living in the house, though there may be some noise and dust. For full-house renovations or large-scale projects, we recommend temporary relocation for safety and comfort.",
        
        q5: "Are my belongings safe during renovation?",
        a5: "Your property's safety is our primary concern. We recommend securing valuable and fragile items in advance and provide protective measures when necessary. Work areas are also protected to prevent damage or dust contamination.",
        
        q6: "I'm planning to move, should I still invest in home renovation?",
        a6: "This depends on your house's current condition and market demand. Appropriate renovation can increase your property's value and attractiveness, helping you sell faster and at a better price. We can provide cost-effective renovation solutions to maximize your return on investment.",
        
        q7: "Do you help clients apply for permits?",
        a7: "Yes, we assist clients with building permit applications, including document submission, drawing preparation, and communication with relevant departments. We are familiar with Toronto's building standards and regulations to ensure project compliance.",
        
        q8: "Does my renovation require a permit?",
        a8: "Permit requirements depend on the project's nature and scale. Structural changes, electrical, or plumbing work typically require permits. We'll assess this early in the project and assist with necessary permit applications.",
        
        q9: "Are the construction workers your employees?",
        a9: "Yes, our construction workers are professionally trained company employees with extensive experience. We strictly monitor construction quality to ensure projects meet your expectations.",
        
        q10: "Do you help clients understand material details?",
        a10: "Absolutely! We have an 1,800 square feet showroom offering clients hands-on material selection experience. Our showroom covers materials needed for various renovation projects, allowing you to personally experience different material details and effects.",
        
        q11: "Do you provide guarantees for your work?",
        a11: "Yes, we provide quality guarantees for all renovation projects. Specific warranty terms and coverage are clearly stated in the contract, ensuring peace of mind after renovation completion."
      },
      serviceAreas: {
        title: "Service Areas",
        // 添加服务区域文本
      },
      consultation: {
        title: "Book a Consultation",
        name: "Your Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message",
        submit: "Submit"
      },
      header: {
        callNow: 'Call Now',
        freeEstimate: 'Free Estimate'
      },
      footer: {
        companyName: "EXCELLENT HOME",
        description: "Excellence in every detail of your home renovation.",
        contactTitle: "Contact Us",
        callTitle: "Call Us Now!",
        phoneEn: "+1 (647) 508-5888 (English)",
        phoneMulti: "+1 (647) 877-8635 (日本語, 中文)",
        visitTitle: "Visit Our Showroom",
        address: "3261 Kennedy Rd, Unit 1\nScarborough, ON M1V 2K1",
        emailTitle: "Send Your Message",
        email: "info@excellenthome.ca",
        hoursTitle: "Working Hours",
        hours: "Monday to Saturday: 10:00 am to 6:00 pm",
        copyright: "© 2025 by Excellent Home Design & Renovation.",
        followUs: "Follow Us On",
        social: {
          facebook: "https://facebook.com/Excellenthomeconstruction",
          youtube: "https://www.youtube.com/@ExcellentHomeDotCA",
          instagram: "https://instagram.com/excellenthomedotca",
          xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c6368440000000010039e5c"
        }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        services: "服务",
        about: "关于我们",
        contact: "联系我们"
      },
      hero: {
        title: "改造您的空间",
        subtitle: "专业的装修与设计服务",
        button: "立即开始"
      },
      history: {
        title: "公司历史与团队资质",
        p1: "EXCELLENT HOME 由Quintin于2013年在创立，他是公司的首席建筑师与灵魂人物。Quintin 的职业旅程始于中国，他在此深耕建筑与施工专业，打下了坚实的技术基础。随后，他在日本成功创立了一家商业改造公司，进一步锤炼了他的专业技能与管理经验。",
        p2: "在日本工作的多年间，Quintin 培养了严谨的设计思维、精准的项目管理能力和卓越的空间规划技巧，并深受日本匠心精神的影响，形成了独特的工艺标准与审美追求。他对日本设计文化的深入理解，使他的作品散发出宁静、雅致的美感与高度的实用性。",
        p3: "2016年，Quintin 移民加拿大，将他对设计与建筑的热情带到了多伦多，并创立了EXCELLENT HOME。凭借他扎实的建筑技术背景，他擅长解决复杂的空间利用问题，并能够在安全规范内提出合理的结构改造方案，帮助客户实现空间的最大价值与美感。",
        p4: "Quintin 不仅在设计过程中提供指导，他更亲自监督和协调项目的每一个环节，确保从概念到落地都能顺利完成，给予客户轻松无忧的体验。他始终秉持着真诚的服务理念，常说的一句话是：'只要您满意，我就开心。'",
        p5: "为了帮助客户更好地可视化设计效果，Quintin 亲手打造了EXCELLENT HOME位于多伦多的1,800平方尺的实体展厅。这个精心设计的空间，让客户可以直观地感受材料、工艺和设计的无限可能。",
        p6: "对 Quintin 而言，每一个项目都是一件艺术品。他用极致的热情和精准的工艺，致力于将每一个空间蜕变成独一无二的杰作。"
      },
      projects: {
        title: "项目展示",
        viewMore: "查看更多"
        // 添加项目展示的文本
      },
      services: {
        title: "我们的服务",
        renovation: "家居装修",
        design: "室内设计",
        consultation: "免费咨询"
        // 添加服务相关文本
      },
      process: {
        title: "服务流程",
        step1: "初步咨询",
        step2: "设计阶段",
        step3: "施工阶段",
        step4: "最终验收"
        // 添加流程相关文本
      },
      partners: {
        title: "合作伙伴"
        // 添加合作伙伴相关文本
      },
      guarantee: {
        title: "服务保证",
        quality: "品质保证",
        satisfaction: "百分百满意"
        // 添加保证相关文本
      },
      faq: {
        title: "常见问题与解答",
        q1: "你们提供哪些装修服务？",
        a1: "我们提供全面的装修服务，包括住宅和商业空间的设计、室内装修、工程施工管理、旧房翻新、厨房和浴室改造、地板安装、油漆涂刷，以及其他定制装修服务。",
        
        q2: "你们公司的装修报价是如何计算的？",
        a2: "我们的报价根据项目的规模、材料的选择、设计的复杂程度以及施工周期进行综合评估。我们会提供详细的报价单，让您清楚了解各项费用。",
        
        q3: "合同价格是固定的还是可能有额外费用？",
        a3: "我们的合同价格是固定且透明的。报价单中会清晰列出所有费用，包括材料费、人工费等。在施工期间，如需进行额外更改或新增项目，我们会提前与您沟通确认，确保没有隐藏费用。",
        
        q4: "装修期间我可以住在我的房子里吗？",
        a4: "这取决于装修的规模和范围。如果是局部小型装修，您通常可以继续住在房子里，但可能会受到一定程度的噪音和粉尘影响。如果是全屋翻新或大规模装修，我们建议您暂时搬离，以确保安全和舒适。",
        
        q5: "装修期间我的物品安全吗？",
        a5: "您的物品安全是我们的首要考虑。我们会建议您提前将贵重物品和易损物品妥善存放，并在必要时提供保护措施。施工区域也会进行防护，以防止损坏或灰尘污染。",
        
        q6: "我打算搬家，我还应该投资房屋装修吗？",
        a6: "这取决于您房屋的现状和市场需求。适当的装修可以提升房屋的价值和吸引力，帮助您在市场上更快地出售房屋并获得更高的价格。我们可以为您提供性价比高的装修方案，确保投资回报最大化。",
        
        q7: "你们是否帮客人申请Permit（许可证）？",
        a7: "是的，我们会协助客户申请所需的建筑许可证（Permit），包括提交相关文件、准备图纸以及与相关部门沟通。我们熟悉多伦多市的建筑标准和规范，确保项目合法合规地进行。",
        
        q8: "我的装修需要许可证吗？",
        a8: "是否需要许可证取决于项目的性质和规模。例如，结构性更改、电气或管道工程通常需要许可证。我们会在项目初期为您评估，并协助办理所需的许可证。",
        
        q9: "为我工作的施工人员是你们的员工吗？",
        a9: "是的，我们的施工人员均为公司聘请的专业团队，接受过系统培训，具有丰富的经验。我们严格监管施工质量，确保项目达到您的期望。",
        
        q10: "选材方面你们会不会让客户更了解细节？",
        a10: "当然会！我们拥有1800平方尺的实体展厅，为客户提供直观的选材体验，详细了解装修材料的种类、质量和特点。我们的展厅涵盖各类装修项目所需的材料，让您可以亲身感受不同材料的细节与效果，做出最合适的选择。",
        
        q11: "你们对你们的工作提供保证吗？",
        a11: "是的，我们对所有装修工程提供质量保证。具体的保修期限和范围会在合同中明确说明，确保您在装修完成后无需担忧任何质量问题。"
      },
      serviceAreas: {
        title: "服务区域",
        // 添加服务区域文本
      },
      consultation: {
        title: "预约咨询",
        name: "姓名",
        email: "邮箱",
        phone: "电话",
        message: "留言",
        submit: "提交"
      },
      header: {
        callNow: '立即致电',
        freeEstimate: '免费估价'
      },
      footer: {
        companyName: "天工巧匠",
        description: "专注于每一个装修细节",
        contactTitle: "联系我们",
        callTitle: "立即致电！",
        phoneEn: "+1 (647) 508-5888 (英语)",
        phoneMulti: "+1 (647) 877-8635 (日语, 中文)",
        visitTitle: "展厅地址",
        address: "3261 Kennedy Rd, Unit 1\nScarborough, ON M1V 2K1",
        emailTitle: "发送信息",
        email: "info@excellenthome.ca",
        hoursTitle: "营业时间",
        hours: "周一至周六：上午10:00 - 下午6:00",
        copyright: "© 2025 天工巧匠装修设计公司版权所有",
        followUs: "关注我们",
        social: {
          facebook: "https://facebook.com/Excellenthomeconstruction",
          youtube: "https://www.youtube.com/@ExcellentHomeDotCA",
          instagram: "https://instagram.com/excellenthomedotca",
          xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c6368440000000010039e5c"
        }
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n