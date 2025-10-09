import { LazyMotion, domAnimation } from "motion/react"

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    </div>
  )
}

export default Wrapper