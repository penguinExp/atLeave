
from fastapi import FastAPI, Body
from textblob import TextBlob

app = FastAPI()

@app.get("/{text}")
def read_root(text):
    textBlob = TextBlob(text)
    score = calculate_star_rating(textBlob.sentiment.polarity)
    return {'res': score}


def calculate_star_rating(sentiment_score):
    star_rating = round((sentiment_score + 1) * 4 / 2) + 1
    return star_rating
