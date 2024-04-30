import { render, screen } from "@testing-library/react";
import BookingSection from "../components/reservations/BookingSection";

test('Renders the BookingForm heading', () => {
    render(<BookingSection />);
    const headingElement = screen.getByText("Book a table for your occassion");
    expect(headingElement).toBeInTheDocument();
})