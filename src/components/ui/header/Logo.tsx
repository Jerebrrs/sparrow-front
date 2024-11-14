import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={"/logo.png"} width={90} height={90} priority alt="" />
        </Link>
    )
}
