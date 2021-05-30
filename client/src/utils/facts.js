function facts() {
    const factsArray = [
        {fact: "The first rubber soled tennis shoes which were produced at the end of the 19th Century allowed one to walk around quietly and literally be able to 'sneak’ up on somebody, hence the word 'sneaker' was born."},
        {fact: "Adidas isn’t the only company who lay claim to the three stripes. The successful Finnish Karhu three-striped shoe was worn at the 1952 Olympics. But eventually Karhu sold its three stripes trademark to adidas for the price of two bottles of good whiskey and about €1,600."},
        {fact: "In 1974, while watching his wife make waffles for breakfast, Nike’s Bill Bowerman had a eureka moment, and starts melting sole rubber with the waffle iron. The Nike waffle sole is invented."},
        {fact: "The Air Jordan I sold 1 million units in its first year and remains Nike top selling basketball shoes to this day. Michael Jordan still earns more in a year from royalties from his branded shoes and clothing than he made in his entire playing career."},
        {fact: "It’s rumored that Adidas' Three Stripes logo was meant to represent the three sons of Adidas founder Adi Dassler."},
        {fact: "Converse Chuck Taylor All-Stars, first marketed in 1917, are the all-time best-selling sneakers, with total sales nearing 600 million pairs."},
        {fact: "Carolyn Davidson, the Portland State University graphic design student who designed the Nike Swoosh in 1971, was originally paid a fee of $35. In 1983, Nike gave her shares of its stock and a diamond ring featuring the Swoosh. She retired in 2000."},
        {fact: "The new balance 996 was the first running sneaker to cost $100 when it dropped in 1981."},
        {fact: "In the early 1300s, Britain established the first means to measure shoe size. King Edward II declared barleycorn as the basis for shoe measurement. He ruled that the length of three barleycorns were equivalent to one inch, making this the standard for sizing."},
        {fact: "Just three companies (Nike, Adidas, and Under Armour) account for more than $25 billion in sneaker sales each year."},
        {fact: "Jordans are released on Saturdays so that kids don't skip school to get 'em. Now they just have to skip school to line up."},
        {fact: "On May 27, 1990, a huge shipment of Nikes got lost at sea. In one of the strangest shipping accidents ever, 80,000 pairs of Nikes went missing in the Pacific Ocean en route from South Korea to the United States. Oceanographer Curtis Ebbesmeyer has been recovering Air Solo Flight, Strike Force, and Pegasus from that overboard shipment ever since."},
        {fact: "Oakley, as we all know, is well known for their athletic-cut shades, but at one point they teamed up with the U.S. Special Forces for a pair of exclusive kicks for the troops. Sorry, no photos or word if they actually exist — that's G14 Classified."},
        {fact: "The big sneaker companies such as Nike and Adidas own viewing boxes at most large sporting events like the U.S. Open and NBA Finals. However, should you step into their box wearing the sneakers of a competitor, you may be promptly asked to go barefoot — or offered to exchange your shoes temporarily for the host brand’s."},
        {fact: "Advertising Age chose Nike's Just Do It slogan as one of the top five ad slogans of the 20th century. Many people may not be aware that Wieden-Kennedy agency co-founder Dan Wieden, was reading his morning paper and came across a story about an American criminal, Gary Gilmore who uttered the words 'lets do it' when being led to his execution. You know the rest and a murderer is credited with coining the phrase that helped all of us get so fresh to death."},
        {fact: "In 2005, Air Force 1s accounted for $1 billion in Nike sales, and a profit margin of 70 percent."},
        {fact: "Jacob The Jeweler created a diamond-encrusted Allen Iverson “Question” sneaker with 246 white-gold diamonds. It sold in 2004 in the Eastbay catalog holiday gift guide for $65,000."},
        {fact: "Reebok almost signed LeBron James to a $75 million contract, until Nike snatched him up for $90 mil."},
        
    ]


    let ranNum = Math.floor(Math.random() * 18)

    switch (ranNum) {
        case 0 : return factsArray[0].fact;
        case 1 : return factsArray[1].fact;
        case 2 : return factsArray[2].fact;
        case 3 : return factsArray[3].fact;
        case 4 : return factsArray[4].fact;
        case 5 : return factsArray[5].fact;
        case 6 : return factsArray[6].fact;
        case 7 : return factsArray[7].fact;
        case 8 : return factsArray[8].fact;
        case 9 : return factsArray[9].fact;
        case 10 : return factsArray[10].fact;
        case 11 : return factsArray[11].fact;
        case 12 : return factsArray[12].fact;
        case 13 : return factsArray[13].fact;
        case 14 : return factsArray[14].fact;
        case 15 : return factsArray[15].fact;
        case 16 : return factsArray[16].fact;
        case 17 : return factsArray[17].fact;
        case 18 : return factsArray[18].fact;
        default: return factsArray[0].fact;
    }
}

export default facts;