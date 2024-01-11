import { Button, Heading, Link, Text, VStack } from "@chakra-ui/react";

const reviews = [
  {
    text: "“With the selling of my property he provided me with the best experience, where we had no issues with selling, and he was 100% in with us in all of the process, making me very satisfied with how things went. Not only recommend Robert as a Professional, but also as a good friend and a good advisor.”",
    name: "- Adriano V",
  },
  {
    text: "“Robert is absolutely wonderful to work with! He went above and beyond to help us find the perfect house during our search. He was able to answer all of our questions, and walk us through the entire process! Would highly recommend!!”",
    name: "- Jody C",
  },
  {
    text: "“Robert was extremely helpful and transparent in the sale of my home through divorce. He worked with us to get the home sold in 2 months for a great price. He even helped get me into a great rental. I highly recommend Robert he is professional and kind.”",
    name: "- Maria V",
  },
];

const Experiences = () => {
  return (
    <>
      <VStack mb={5}>
        <Heading mb={5}>Testimonials</Heading>
        {reviews.map((review, index) => (
          <VStack key={index} mb={5} width={{ base: "359px", md: "600px" }}>
            <Text textAlign={"center"}>{review.text}</Text>
            <Heading fontSize={"xl"}>{review.name}</Heading>
          </VStack>
        ))}
        <Link
          href="https://www.google.com/search?q=robert+perez+real+estate&sca_esv=556337279&sxsrf=AB5stBgrq_hXN4ln_0fpB8XwJK1pUa0jXg%3A1691859659107&source=hp&ei=y7rXZLLbA-6AkvQP--2D6AY&iflsig=AD69kcEAAAAAZNfI21gW6wq4vC_bkwOBLNNuABQqAheA&oq=robert+per&gs_lp=Egdnd3Mtd2l6Igpyb2JlcnQgcGVyKgIIADIEECMYJzIEECMYJzIIEC4YsQMYgAQyCBAuGIAEGLEDMgsQLhivARjHARiABDIIEC4YsQMYgAQyBRAuGIAEMgUQABiABDIFEC4YgAQyBRAAGIAESKgiUNoQWNcdcAN4AJABAJgBnwGgAaQLqgEEMC4xMrgBA8gBAPgBAagCCsICBxAjGOoCGCfCAgcQIxiKBRgnwgILEAAYgAQYsQMYgwHCAgsQLhiABBixAxiDAcICCxAuGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAggQABiABBixA8ICERAuGIMBGMcBGLEDGNEDGIAEwgILEC4YgwEYsQMYgATCAgsQLhiABBjHARivAQ&sclient=gws-wiz#lrd=0x88c2ce66e64fe41d:0x3db27caddbe945,1,,,,"
          target={"_blank"}
        >
          <Button colorScheme={"red"}>Read More</Button>
        </Link>
      </VStack>
    </>
  );
};

export default Experiences;
