import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, forwardRef, useRef } from "react";

interface FadeInProps {
  children: ReactNode;
  x?: number;
  stagger?: number;
}
export type AnimationRef = GSAPTimeline;

const FadeInComponent = forwardRef<AnimationRef, FadeInProps>((props, ref) => {
  const animationRef = useRef<GSAPTimeline>(null!);
  const textContentRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    animationRef.current = gsap
      .timeline({ defaults: { ease: "expo.inOut", immediateRender: false } })
      .fromTo(
        textContentRef.current.children,
        {
          opacity: 0,
          x: "-25%",
          autoAlpha: 0,
          duration: 2,
          stagger: 0.1,
        },
        {
          opacity: 1,
          x: "-25%",
          duration: 2,
          autoAlpha: 1,
          stagger: 0.1,
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
    <div className="absolute z-0 flex w-full h-full overflow-hidden" ref={textContentRef}>
      {props.children}
    </div>
  );
});

FadeInComponent.displayName = "FadeInAnimation";

export default FadeInComponent;
