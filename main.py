def calories():
    stapleFood = ['Roti','Naan','Paratha','Puri','Idli','Dosa','Uttapam','Upma','Khichdi','Biryani']
    veg = ['pBM','palakPaneer','alooGobi','Bharta','Chole','Rajma','Bhindi','malaiKofta','Sambar','Dosa']
    nonVeg = ['butterChicken','cTM','fishCurry','mRJ','Keema','tandooriChicken','Prawn','eggCurry','chickenBiryani','Korma']
    snacks = ['Samosa','Pakora','bhelPuri','paniPuri','vadaPav','Dhokla','alooTikki','pavBhaji','Kachori','Chaat','Chips']
    sweets = ['gulabJamun','Rasgulla','Jalebi','Laddu','Kheer','Barfi','Rasmalai','Halwa','Payasam','mysorePak']
    categories = [stapleFood,veg,nonVeg,snacks,sweets]
    print(categories[0][3])
calories()