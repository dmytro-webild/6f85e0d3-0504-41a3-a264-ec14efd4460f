"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="solid"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Grill Addicts"
      button={{
        text: "Order Online",
        href: "#order",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Where Flavor Gets Grilled"
      description="Experience Windhoek's finest flame-grilled burgers, ribs, and loaded street-style meals. Addicted to flavor, served fresh daily."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "The best burger I've had in Windhoek! Perfectly grilled.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-burger-with-cheese-tomato-generative-ai_188544-33302.jpg?_wi=1",
          imageAlt: "juicy flame grilled burger extreme close up",
        },
        {
          name: "Mark D.",
          handle: "@markd",
          testimonial: "Incredible ribs and fast service. Will be back!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-wicker-lamps-ceiling-inside-building_181624-47099.jpg?_wi=1",
          imageAlt: "juicy flame grilled burger extreme close up",
        },
        {
          name: "Klaus M.",
          handle: "@klausm",
          testimonial: "The quality is unmatched in Windhoek. A true gem.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-icon-left-side_187299-45734.jpg?_wi=1",
          imageAlt: "juicy flame grilled burger extreme close up",
        },
        {
          name: "Linda P.",
          handle: "@lindap",
          testimonial: "Great environment and the food is phenomenal.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/illsutrated-organic-food-background_53876-17860.jpg?_wi=1",
          imageAlt: "juicy flame grilled burger extreme close up",
        },
        {
          name: "James B.",
          handle: "@jamesb",
          testimonial: "If you love a good smokey flavor, this is your place.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3qsgsb&_wi=1",
          imageAlt: "juicy flame grilled burger extreme close up",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/grilled-beef-burger-with-cheese-tomato-generative-ai_188544-33302.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-smartphone_23-2149396218.jpg",
          alt: "Medium shot man holding smartphone",
        },
        {
          src: "http://img.b2bpic.net/free-photo/dreamy-african-man-glasses-standing-street-outdoor-photo-stylish-black-guy-listening-music-headphones_197531-21803.jpg",
          alt: "Dreamy african man in glasses standing on the street",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-stylish-woman-coat-joyfully-looking-camera-walking-through-city-street_574295-2122.jpg",
          alt: "Young beautiful smiling stylish woman in coat",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-new-york-city-daytime_23-2149488497.jpg",
          alt: "Young man in the new york city during daytime",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-brunettte-woman-wearing-casual-clothes-pink-background-looking-positive-happy-standing-smiling-with-confident-smile-showing-teeth_839833-30250.jpg",
          alt: "Beautiful brunettte woman wearing casual clothes",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Flame Grilled",
        },
        {
          type: "text",
          text: "Locally Sourced",
        },
        {
          type: "text",
          text: "B1 City Best",
        },
        {
          type: "text",
          text: "Fast Delivery",
        },
        {
          type: "text",
          text: "Award Winning",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="About Grill Addicts"
      description="Born from a passion for fire and flavor, we bring the best of street-style grilled food to B1 City. We pride ourselves on locally sourced meats and a vibrant, urban atmosphere that makes everyone feel at home."
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-wicker-lamps-ceiling-inside-building_181624-47099.jpg?_wi=2"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Express Delivery",
          tags: [
            "Speed",
            "Convenience",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-icon-left-side_187299-45734.jpg?_wi=2",
        },
        {
          id: "2",
          title: "Fresh Local Produce",
          tags: [
            "Quality",
            "Fresh",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/illsutrated-organic-food-background_53876-17860.jpg?_wi=2",
        },
        {
          id: "3",
          title: "Signature Flame-Grill",
          tags: [
            "Authentic",
            "Smoky",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3qsgsb&_wi=2",
        },
      ]}
      title="Why Choose Us"
      description="We are committed to quality, speed, and unforgettable taste experiences."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "B1 Classic Burger",
          price: "N$85",
          variant: "Beef",
          imageSrc: "http://img.b2bpic.net/free-photo/preparation-delicious-burger-arrangement_23-2148868245.jpg",
        },
        {
          id: "p2",
          name: "Spicy Wings",
          price: "N$65",
          variant: "Chicken",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-french-fries-with-fried-chicken-nuggets_23-2148646563.jpg",
        },
        {
          id: "p3",
          name: "Smoky BBQ Ribs",
          price: "N$145",
          variant: "Pork",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-delicious-food-arrangement_23-2148510928.jpg",
        },
        {
          id: "p4",
          name: "Craft Lemonade",
          price: "N$35",
          variant: "Drink",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-delicious-fermented-drinks_23-2148895753.jpg",
        },
        {
          id: "p5",
          name: "Crispy Onion Rings",
          price: "N$30",
          variant: "Side",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-fast-food-napkin_23-2149235968.jpg",
        },
        {
          id: "p6",
          name: "Double Choc Brownie",
          price: "N$45",
          variant: "Dessert",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cheesecake-with-chocolate-oval-plate-tied-cookies-xmas-ornaments-grey-surface_140725-62348.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Flame-grilled to perfection, just for you."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Klaus M.",
          date: "10/02/2025",
          title: "Regular Visitor",
          quote: "The quality is unmatched in Windhoek. A true gem.",
          tag: "Top Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/woman-with-curly-hair-dressed-fashionable-clothes-round-spectacles-looks-away-considers-something_273609-55152.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-burger-with-cheese-tomato-generative-ai_188544-33302.jpg?_wi=3",
          imageAlt: "young professional portrait urban",
        },
        {
          id: "2",
          name: "Linda P.",
          date: "08/02/2025",
          title: "Family Favorite",
          quote: "Great environment for the kids and the food is phenomenal.",
          tag: "Best Service",
          avatarSrc: "http://img.b2bpic.net/free-photo/excited-lucky-charming-friendly-blond-girlfriend-having-fun-celebrating-perfect-news-best-score-receive-scholarship-smiling-amused-carefree-close-eyes-show-peace-victory-signs-orange-background_1258-307693.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-wicker-lamps-ceiling-inside-building_181624-47099.jpg?_wi=3",
          imageAlt: "young professional portrait urban",
        },
        {
          id: "3",
          name: "James B.",
          date: "05/02/2025",
          title: "Burger Connoisseur",
          quote: "If you love a good smokey flavor, this is your place.",
          tag: "Must Try",
          avatarSrc: "http://img.b2bpic.net/free-photo/hipster-with-stylish-haircut-beard-sits-table-roadside-cafe-drinks-soda-hot-day_613910-19633.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-icon-left-side_187299-45734.jpg?_wi=3",
          imageAlt: "young professional portrait urban",
        },
        {
          id: "4",
          name: "Naledi K.",
          date: "01/02/2025",
          title: "Loyal Customer",
          quote: "I'm officially addicted to their loaded fries!",
          tag: "Favorite",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-teenage-girl-posing_23-2148672410.jpg",
          imageSrc: "http://img.b2bpic.net/free-vector/illsutrated-organic-food-background_53876-17860.jpg?_wi=3",
          imageAlt: "young professional portrait urban",
        },
        {
          id: "5",
          name: "David W.",
          date: "15/01/2025",
          title: "Foodie",
          quote: "A world-class experience right here in B1 City.",
          tag: "Excellent",
          avatarSrc: "http://img.b2bpic.net/free-photo/pretty-student-girl-holding-books-looking-happy-smiling-camera-outdoor-stylish-girl-way-university_574295-4508.jpg",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3qsgsb&_wi=3",
          imageAlt: "young professional portrait urban",
        },
      ]}
      title="Fan Favorites"
      description="Hear what our hungry community has to say about their Grill Addicts experience."
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "TechCorp",
        "DeliveryPro",
        "SecurePay",
        "SodaCo",
        "B1 Commerce",
        "Windhoek Media",
        "Culinary Events",
      ]}
      title="Trusted Partners"
      description="Working with top brands to bring you the best service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do you offer delivery?",
          content: "Yes, we deliver across Windhoek city centre and B1 City surroundings.",
        },
        {
          id: "2",
          title: "Are you wheelchair accessible?",
          content: "Absolutely, our restaurant is fully wheelchair accessible.",
        },
        {
          id: "3",
          title: "Do you have loyalty programs?",
          content: "Yes! Join our Addict Rewards program for points on every purchase.",
        },
      ]}
      title="Have Questions?"
      description="Here is everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Stay Connected"
      description="Subscribe for exclusive menu updates and viral flavor drops."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/delicious-burgers-with-bright-lights_23-2150902234.jpg"
      logoText="Grill Addicts"
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "B1 City, Windhoek",
              href: "#map",
            },
            {
              label: "Contact: +264 61 123 4567",
              href: "tel:+264611234567",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Loyalty Program",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
