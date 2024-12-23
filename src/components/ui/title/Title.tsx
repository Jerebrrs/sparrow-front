import { titleFont,goticaFont } from "@/config/font/fonts";



interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}



export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={ `mt-3 ${ className }` }>
      <h1 className={ `${ goticaFont.className } antialiased text-3xl font-semibold my-7` }>
        { title }
      </h1>

      {
        subtitle && (
          <h3 className="text-lg mb-5">{ subtitle }</h3>
        )
      }

    </div>
  )
}