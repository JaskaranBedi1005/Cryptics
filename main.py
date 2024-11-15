from flask import Flask
def calories():
    stapleFood = {'Roti': 120,'Naan': 270,'Paratha': 500,'Puri': 130,'Idli': 70,'Dosa':350,'Uttapam':420,'Upma':290,'Khichdi':420,'Biryani':900}
    veg = ['pBM','palakPaneer','alooGobi','Bharta','Chole','Rajma','Bhindi','malaiKofta','Sambar','Dosa']
    nonVeg = ['butterChicken','cTM','fishCurry','mRJ','Keema','tandooriChicken','Prawn','eggCurry','chickenBiryani','Korma']
    snacks = ['Samosa','Pakora','bhelPuri','paniPuri','vadaPav','Dhokla','alooTikki','pavBhaji','Kachori','Chaat','Chips']
    sweets = ['gulabJamun','Rasgulla','Jalebi','Laddu','Kheer','Barfi','Rasmalai','Halwa','Payasam','mysorePak']
    print(veg)
calories()
