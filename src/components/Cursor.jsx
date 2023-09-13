import { useRef, useEffect } from "react";

export default function Cursor(){

    const mouseCursorRef = useRef(null);
    const navLinksRef = useRef(null);
    
    useEffect(() => {
        const mouseCursor = mouseCursorRef.current;
        const navLinks = Array.from(navLinksRef.current);
      
        const cursor = (e) => {
          mouseCursor.style.top = e.pageY + 'px';
          mouseCursor.style.left = e.pageX + 'px';
        };
      
        const handleMouseEnter = (link) => {
          mouseCursor.classList.add('link-grow');
          link.classList.add('hovered-link');
        };
      
        const handleMouseLeave = (link) => {
          mouseCursor.classList.remove('link-grow');
          link.classList.remove('hovered-link');
        };
      
        window.addEventListener('mousemove', cursor);
      
        navLinks.forEach((link) => {
          link.addEventListener('mouseleave', () => handleMouseLeave(link));
          link.addEventListener('mouseover', () => handleMouseEnter(link));
        });
      
        // Clean up the event listeners when the component unmounts
        return () => {
          window.removeEventListener('mousemove', cursor);
          navLinks.forEach((link) => {
            link.removeEventListener('mouseleave', () => handleMouseLeave(link));
            link.removeEventListener('mouseover', () => handleMouseEnter(link));
          });
        };
      }, []);

      return (
        <>
          <div className="cursor" ref={mouseCursorRef}></div>
    
          <ul className="nav-links" ref={navLinksRef}>
            {/* Your nav links */}
          </ul>
        </>
        )
      
}