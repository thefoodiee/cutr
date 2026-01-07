import { React } from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="font-bold flex flex-col md:flex-row gap-2 items-center justify-between p-5 px-7 text-xl">
      <div className="left flex-1">
        <Link href="/">skibi.di</Link>
      </div>

      <div className="middle flex-1 text-center">
        URL Shortener
      </div>

      <div className="right flex justify-end flex-1">
        <div className="links flex gap-3 ">
          <Link className="border border-white p-2 rounded-md" href="/">Home</Link>
          <Link className="border border-white p-2 rounded-md" href="/about">About</Link>
          <Link className="border border-white p-2 rounded-md" href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
