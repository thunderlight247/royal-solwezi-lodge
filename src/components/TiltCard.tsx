"use client";
import { useSpring, animated, to } from "@react-spring/web";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [s, api] = useSpring(() => ({
    rx: 0,
    ry: 0,
    sc: 1,
    config: { tension: 220, friction: 20 },
  }));

  return (
    <animated.div
      className={className}
      style={{
        transform: to(
          [s.rx, s.ry, s.sc],
          (rx, ry, sc) =>
            `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${sc})`
        ),
      }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        api.start({
          ry: ((e.clientX - r.left) / r.width - 0.5) * 3,
          rx: -((e.clientY - r.top) / r.height - 0.5) * 3,
          sc: 1.015,
        });
      }}
      onMouseLeave={() => {
        api.start({ rx: 0, ry: 0, sc: 1 });
      }}
    >
      {children}
    </animated.div>
  );
}
