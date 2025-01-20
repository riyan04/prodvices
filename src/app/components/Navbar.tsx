import Link from "next/link"



const Navbar = () => {
  return (
    <div className=" px-7 py-3 flex justify-between">
        <div>
            <h1 className=" text-[30px] font-bold ">Prodvices</h1>
        </div>
        <div className=" flex justify-end gap-8 my-auto">
            <Link href={"#"}>
                Home
            </Link>
            <Link href={"#"}>
                Our Services
            </Link>
            <Link href={"#"}>
                About Us
            </Link>
            <Link href={"#"}>
                Contact
            </Link>
        </div>
    </div>
  )
}

export default Navbar