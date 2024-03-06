import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, forwardRef, useRef } from "react";

interface FadeInProps {
  children: ReactNode;
  y: number;
  stagger: number;
}
export type AnimationRef = GSAPAnimation;

const FadeInComponent = forwardRef<AnimationRef, FadeInProps>(({ children, y = 0, stagger = 0 }, ref) => {
  const animationRef = useRef<GSAPAnimation>(null!);
  const textContentRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    animationRef.current = gsap
      .from(
        textContentRef.current.children,
        {
          opacity: 0,
          yPercent: y,
          stagger: stagger
        },
      );

    return () => {
      animationRef.current.kill();
      animationRef.current.revert();
    };
  });

  useGSAP(() => {
    if (typeof ref === "function") {
      ref(animationRef.current);
    } else if (ref) {
      ref.current = animationRef.current;
    }
  }, [ref]);

  return (
    <div className="relative" ref={textContentRef}>
      {children}
    </div>
  );
});

FadeInComponent.displayName = "FadeInAnimation";

export default FadeInComponent;
