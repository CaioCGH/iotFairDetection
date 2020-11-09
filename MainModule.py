from ObjectDetectorModule import *
import datetime 

cap = cv2.VideoCapture(0)
cap.set(3, 640)
cap.set(4, 480)
# cap.set(10,70)
f = open("history.csv", "a")
try:
    while True:
        success, img = cap.read()
        result,objectInfo = getObjects(img,0.45,0.2,objects=['person','car', 'bus', "bicycle", "motorcycle", "truck"])
        for x in objectInfo:
            string = str(datetime.datetime.now()) + ","  + x[1]
            print(string)
            f.write(string + "\n")
        cv2.imshow("Output", img)
        cv2.waitKey(1)
finally:
    print("closing file")
    f.close()