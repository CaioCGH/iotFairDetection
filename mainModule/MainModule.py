from ObjectDetectorModule import *
import datetime
import sqlite3
import time

cap = cv2.VideoCapture(0)
cap.set(3, 640)
cap.set(4, 480)
# cap.set(10,70)
conn = sqlite3.connect('Database.db')
c = conn.cursor()
try:
    while True:
        success, img = cap.read()
        result,objectInfo = getObjects(img,0.45,0.2,objects=['person','car', 'bus', "bicycle", "motorcycle", "truck"])
        for x in objectInfo:
            string = str(datetime.datetime.now()) + ","  + x[1]
            print(string)
            c.execute("INSERT INTO observation(timestamp, 'object_name') select datetime('now', '-3 hour'),\"" + x[1] + "\";")
        conn.commit()
        time.sleep(1)
        
        # cv2.imshow("Output", img)
        # cv2.waitKey(1)
finally:
    print("closing database")
    conn.close()