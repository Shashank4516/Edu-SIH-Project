export const smoothScrollTo = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    const headerHeight = 80; // Adjust based on your header height
    const targetPosition = target.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

export const handleScrollClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  // Only handle scroll links (those starting with #)
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the # symbol
    smoothScrollTo(targetId);
  }
};
