import { Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      {/* About Us Start */}
      <Container className="text-center lh-lg">
        <div className="fs-1 fw-bold pt-5">About Us</div>
        <div className="fs-4 fw-semibold pt-3">Customer Service</div>
        <div>
          One of the things our customers love about our store is the unrivaled
          customer service that we are available always to attend to visitors'
          inquiries. All you need to do is get in touch, and we will handle any
          issues you might have promptly.
        </div>
        <div className="fs-4 fw-semibold pt-3">Special Deals</div>
        <div>
          We value our customers, and we are always looking for new ways to
          reward them for their patronage. This is why we give our customers
          exclusive deals they can't find elsewhere. Our goal is to provide
          excellent service to our customers so they can recommend us to friends
          and family.
        </div>
        <div className="fs-4 fw-semibold pt-3">Customer Satisfaction</div>
        <div>
          We are aware that our customers are the driving force behind our
          business, and are always ready to go out of our way to exceed their
          expectation with every product they purchase from our store. We
          believe we can turn our store's visitors into not just customers but
          raving fans. You can take advantage of our amazing products and great
          services right away by first browsing through our various categories
          and collection.
        </div>
      </Container>
      {/* About Us End */}
    </>
  );
}
