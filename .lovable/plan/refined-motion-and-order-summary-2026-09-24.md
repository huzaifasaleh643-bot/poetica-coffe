# Refined motion and order summary

## Implementation
- Extend the statistics animation from two seconds to approximately eight seconds, keeping `08`, `100%`, and `365` formatting intact.
- Add a reusable scroll-reveal system that introduces headings, cards, images, and supporting content in a restrained staggered sequence as each section enters view.
- Respect reduced-motion settings so the page remains comfortable and accessible.
- Replace the cart's count-only state with tracked retail line items and quantities while preserving the navbar's total `Cart (n)` display.
- Add an order summary to the branch-selection popup showing each selected coffee bag, its quantity, and the total item count before branch selection.
- Keep the existing branch buttons, close control, styling, fonts, and confirmation feedback.

## Verification
- Confirm the three counters finish at their exact values after about eight seconds.
- Scroll through desktop and mobile views to verify staggered content appears once without overlap or layout shifts.
- Add both retail products multiple times and confirm navbar and popup quantities stay synchronized.
- Open and close the popup from the main ordering buttons and select each branch successfully.
- Confirm the current page builds without errors or accessibility warnings.
