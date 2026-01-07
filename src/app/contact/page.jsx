import PageBackground from "@/components/Background"

const Contact = () => {
  return (
    <div>
      <PageBackground src="/chicken.png"/>
<div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-12">
        CONTACT US (why tho? 🤨)
      </h1>

      {/* Two-column text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        
        <pre className="whitespace-pre-wrap text-white text-lg md:text-xl">
{`blud really thought about contacting us 💀
like actually paused life and said
“yeah let me reach out to skibi.di”

there is no support team
there is no hotline
there is no “we’ll get back to you”

it’s just vibes and shortened links

if something breaks:
• refresh
• close the tab
• accept fate`}
        </pre>

        <pre className="whitespace-pre-wrap text-white text-lg md:text-xl">
{`emails? imaginary  
phone number? hallucination  
office address? spiritually absent  

we do not respond
we do not read
we do not care (lovingly)

but if you still feel the urge:
scream into the void
it has better response times

skibi.di  
short links  
short patience  
zero customer service 🧠💥`}
        </pre>

      </div>
    </div>

    </div>
      )
}

export default Contact

export const metadata = {
  title: "skibi.di - contact us",
  description: "contact skibi.di",
};
