import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button"



const Navbar = () => {
  return (
    <div className="flex justify-between">
        <div className=" pl-6 flex justify-between gap-4">
            <Button>
                <Link href={"#"}>
                    About Us
                </Link>
            </Button>
            <Button>

                <Link href={"#"}>
                    Projects
                </Link>
            </Button>
            <Button>
                <Link href={"#"}>
                    Services
                </Link>
            </Button>
            <Button variant={"outline"}>
                <Link href={"#"}>
                    Contact Us
                </Link>
            </Button>
        </div>
        <div className=" flex mt-1 mr-2 gap-3">
            <FaLinkedin className=" size-6" />
            <FaInstagram className=" size-6" />
        </div>
    </div>
  )
}

export default Navbar