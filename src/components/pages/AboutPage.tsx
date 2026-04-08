import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteImages } from '@/data/site-content';


export default function AboutPage() {
 return (
   <div className="min-h-screen bg-background">
     <Header />
     {/* Hero Section */}
     <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-20 pt-32 pb-16 lg:pt-40 lg:pb-20">
       <div className="max-w-[100rem] mx-auto">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
               About Will Rayners Custom Painting
             </h1>
             <div className="space-y-6">
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 At Will Rayners Custom Painting, we believe a fresh coat of paint can do more than transform a space—it can completely change the way you feel about your home or business.
               </p>
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 Will Rayners Custom Painting is a local business proudly serving Flowood, Mississippi and the surrounding communities. Every project is approached with the kind of care, consistency, and respect homeowners want when they invite someone into their space.
               </p>
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 Will has built his reputation on doing solid work, communicating clearly, and taking the time to get the details right. Whether the project is a quick repaint or a more involved transformation, the goal stays the same: deliver results the customer feels proud of when the job is done.
               </p>
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 Whether you're refreshing a single room, updating your home's exterior, or giving your business a clean new look, we focus on careful preparation, attention to detail, and a professional finish that lasts.
               </p>
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 We understand that inviting someone to work on your property requires trust. That's why clear communication, dependable service, and craftsmanship are at the heart of everything we do. From the first estimate to the final coat of paint, our goal is to make the process simple and deliver results you can be proud of.
               </p>
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 At Will Rayners Custom Painting, every project is treated with care—because your space deserves nothing less.
               </p>
               <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                 If you're in the Flowood area and looking for dependable painting professionals, Will Rayners Custom Painting would be honored to help bring your vision to life.
               </p>
             </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
           >
             <div className="aspect-[3/4] rounded-lg overflow-hidden">
               <Image
                 src={siteImages.aboutWork}
                 width={600}
                 className="w-full h-full object-cover"
                 originWidth={1080}
                 originHeight={1636}
                 focalPointX={47.712962962962955}
                 focalPointY={30.751833740831298} />
             </div>
           </motion.div>
         </div>
       </div>
     </section>
     {/* Values Section */}
     <section className="w-full bg-white py-20 lg:py-32">
       <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12 lg:mb-16"
         >
           <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-4">
             Our Values
           </h2>
           <p className="font-paragraph text-lg text-secondary max-w-3xl mx-auto">
             What sets Will Rayners Custom Painting apart
           </p>
         </motion.div>


         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="text-center"
           >
             <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
               <CheckCircle className="w-8 h-8 text-primary-foreground" />
             </div>
             <h3 className="font-heading text-2xl text-foreground mb-3">
               Quality Craftsmanship
             </h3>
             <p className="font-paragraph text-base text-secondary">We hold a standard of workmanship in all services provided.</p>
           </motion.div>


           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="text-center"
           >
             <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
               <Heart className="w-8 h-8 text-primary-foreground" />
             </div>
             <h3 className="font-heading text-2xl text-foreground mb-3">Hard Work</h3>
             <p className="font-paragraph text-base text-secondary">We take pride in what we do and the work we put our name on.</p>
           </motion.div>


           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-center"
           >
             <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
               <Shield className="w-8 h-8 text-primary-foreground" />
             </div>
             <h3 className="font-heading text-2xl text-foreground mb-3">Trust</h3>
             <p className="font-paragraph text-base text-secondary">We act with integrity, creating a sense of safety, reliability, and keeping our word.</p>
           </motion.div>


           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="text-center"
           >
             <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
               <Users className="w-8 h-8 text-primary-foreground" />
             </div>
             <h3 className="font-heading text-2xl text-foreground mb-3">
               Customer Focus
             </h3>
             <p className="font-paragraph text-base text-secondary">We present ourselves and the organization as professional and competent. We strive to maintain relationships.</p>
           </motion.div>
         </div>
       </div>
     </section>
     {/* Why Choose Us Section */}
     <section className="w-full py-20 lg:py-32">
       <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
               Why Choose Will Rayners Custom Painting?
             </h2>
             <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-6 h-6 mt-1">
                   <CheckCircle className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-paragraph text-lg font-semibold text-foreground mb-2">
                     Local & Trusted
                   </h3>
                   <p className="font-paragraph text-base text-secondary">
                     Based in Flowood, we're your neighbors and we're invested in our community's satisfaction.
                   </p>
                 </div>
               </div>


               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-6 h-6 mt-1">
                   <CheckCircle className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-paragraph text-lg font-semibold text-foreground mb-2">
                     Proven Track Record
                   </h3>
                   <p className="font-paragraph text-base text-secondary">
                     Customer feedback consistently points to quality work, professionalism, and a smooth experience from start to finish.
                   </p>
                 </div>
               </div>


               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-6 h-6 mt-1">
                   <CheckCircle className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-paragraph text-lg font-semibold text-foreground mb-2">
                     Clean & Respectful
                   </h3>
                   <p className="font-paragraph text-base text-secondary">
                     We treat your home with respect, maintaining clean work areas and protecting your belongings.
                   </p>
                 </div>
               </div>


               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-6 h-6 mt-1">
                   <CheckCircle className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-paragraph text-lg font-semibold text-foreground mb-2">
                     Fair & Transparent Pricing
                   </h3>
                   <p className="font-paragraph text-base text-secondary">
                     Get a detailed, honest estimate with no hidden fees or surprise charges.
                   </p>
                 </div>
               </div>
             </div>
           </motion.div>


           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
           >
             <div className="aspect-[4/3] rounded-lg overflow-hidden">
               <Image
                 src={siteImages.aboutWork}
                 alt="Professional painting work by Will Rayners Custom Painting"
                 width={800}
                 className="w-full h-full object-cover"
               />
             </div>
           </motion.div>
         </div>
       </div>
     </section>
     {/* Service Area Section */}
     <section className="w-full bg-white py-20 lg:py-32">
       <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-6">
             Serving Flowood / Jackson Metro Areas
           </h2>
           <p className="font-paragraph text-lg lg:text-xl text-secondary max-w-3xl mx-auto mb-8">
             We proudly serve homeowners throughout Flowood, Brandon, Jackson, Pearl, Madison, and nearby communities. If you're not sure whether we cover your address, give us a call at (601) 260-0061.
           </p>
           <div className="bg-background p-8 rounded-lg inline-block">
             <p className="font-paragraph text-base text-foreground mb-2">
               <span className="font-semibold">Business Address:</span>
             </p>
             <p className="font-paragraph text-base text-secondary">
               116 Stockton Dr<br />
               Flowood, MS 39232
             </p>
           </div>
         </motion.div>
       </div>
     </section>
     {/* CTA Section */}
     <section className="w-full py-20 lg:py-32 bg-primary">
       <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           <h2 className="font-heading text-4xl lg:text-6xl text-primary-foreground mb-6">
             Let's Work Together
           </h2>
           <p className="font-paragraph text-lg lg:text-xl text-primary-foreground mb-8 max-w-3xl mx-auto">
             Ready to refresh your home with detail-focused painting? Contact Will today for a free estimate.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
               to="/contact"
               className="inline-block bg-white text-primary font-paragraph font-semibold px-8 py-4 rounded transition-colors hover:opacity-90"
             >
               Get Free Estimate
             </Link>
             <a
               href="tel:6012600061"
               className="inline-block bg-transparent text-primary-foreground border-2 border-primary-foreground font-paragraph font-semibold px-8 py-4 rounded transition-colors hover:bg-primary-foreground hover:text-primary"
             >
               Call (601) 260-0061
             </a>
           </div>
         </motion.div>
       </div>
     </section>
     <Footer />
   </div>
 );
}
