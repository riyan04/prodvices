import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="flex justify-between">
        <div className=" pl-2 flex justify-between gap-4">
            <Link href={"#"}>
                About Us
            </Link>
            <Link href={"#"}>
                Projects
            </Link>
            <Link href={"#"}>
                Services
            </Link>
            <Link href={"#"}>
                Contact Us
            </Link>
        </div>
        <div className=" flex mt-1">
            <FaLinkedin />
            <FaInstagram />
        </div>
    </div>
  )
}

export default Navbar