# Natural Language Processing

This is a natural language processor. The application returns the sentiment analysis of a news article after the user supplies a valid web-link.  The application will return data pertaining to the source's: 

1.  **Agreement**
   
    Marks the agreement between the sentiments detected in the text, the sentence or the segement it refers to.

        Possible responses:
        - AGREEMENT: the different elements have the same polarity.
        - DISAGREEMENT: there is disagreement between the different elements' polarity.

2. **Confidence**

    Represents the confidence associated with the sentiment analysis performed on the text. Its value is an integer number in the 0-100 range.

        Possible responses:
        - 0-100

3. **Irony**
     
    Indicates the irony of the text. It has two possible values:

        Possible responses:
        - NONIRONIC: the text does not have any irony marks.
        - IRONIC: the text has irony marks.

4. **Subjectivity**

     Marks the subjectivity of the text. It has two possible values:

        Possible responses:
        - OBJECTIVE: the text does not have any subjectivity marks.
        - SUBJECTIVE: the text has subjective marks.

5. **Score**
     Polarity of the element it refers to: global polarity,

        Possible responses:
        - P+: strong positive
        - P: positive
        - NEU: neutral
        - N: negative
        - N+: strong negative
        - NONE: without polarity