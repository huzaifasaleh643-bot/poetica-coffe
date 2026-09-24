# Animated statistics

## Implementation
- Add a small reusable counter inside the existing statistics row.
- Use Intersection Observer to start each count when the row enters the viewport.
- Animate from zero to the final value over two seconds and preserve `08`, `100%`, and `365` formatting.
- Trigger the animation only once and respect reduced-motion preferences.

## Verification
- Confirm all three values reach their exact final display.
- Check scrolling behavior and the current page build.
