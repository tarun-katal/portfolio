import {motion} from "framer-motion"

const Experience = () => {

  const containerVariants={
    hidden:{opacity:0, y:50}, visible:{ opacity:1, y:0 , transition:{duration:0.8, ease: "easeOut",staggerChildren:0.3},
  }}


  return (
    <section className="px-6 py-10" id= "experience" >
      <h2 className="text-4xl md:text-4xl font-medium tracking-tight mb-10"> Tech Stack</h2>
      <div className="h-1 w-20 bg-white"></div>
      <motion.div className="space-y-10 " initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={containerVariants}>
        <div className="flex justify-center items-center">
         
           
            <div className="w-full backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
              <h2 className="text-xl mb-2"></h2>
              <p className="mb-4 text-xl italic"></p>
              <ul className=" flex justify-between  list-disc list-inside gap-16 flex-wrap">
                <li >Reactjs</li>
                <li >Typescript</li>
                <li >Framer Motion</li>
                <li >Docker</li>
                <li >Kubernetes</li>
                <li >AWS</li>
                <li >Nextjs</li>
                <li >Express</li>
                <li >Cloudflare</li>
                <li >Redis</li>
                <li >Prometheus</li>
                <li >Git</li>
                <li >Tailwind</li>
                <li >MongoDB</li>
                <li >PostgreSQL</li>

              </ul>
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
