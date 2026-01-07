import PageBackground from "@/components/Background"

const About = () => {
  return (
    <div>
      <PageBackground src="/zombie.png"  />
      <div className="content m-auto w-screen text-center">
        <pre className="whitespace-pre-wrap text-white text-xl">
          {`bro we woke up and said links too long = not valid
so we summoned skibi.di at 3:17am
keyboard clacking like skrrt skrrt

you paste a link
BOOM
it gets put in a blender
comes out SHORT. CLEAN. DESTRUCTIVE.

teachers hate it
URLs fear it
Google Chrome starts sweating

“why is the link so small?”
bc skibi.di ate the extra characters 😈

one click = dopamine
two clicks = illegal
three clicks = browser ascends

not a link shortener
it’s a link EVOLUTION

skibi di di di
your URL is now mentally optimized
share it. flex it. forget the original ever existed.

skibi.di
short links
short attention span
maximum brain damage 💥`}
        </pre>
      </div>
    </div>
  )
}

export default About

export const metadata = {
  title: "skibi.di - about us",
  description: "about skibi.di",
};
