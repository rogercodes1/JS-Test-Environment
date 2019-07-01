import java.awt.*;

public class Car {

    double averageMilesPerGallon;
    String licensePlate;
    Color paintColor;
    boolean areTailLightsWorking;

    public Car(double inputAvgMPG,
            String inputLicensePlate,
            Color inputPaintColor, boolean inputAreTailLightsWorking){
        this.averageMilesPerGallon = inputAvgMPG;
        this.licensePlate = inputLicensePlate;
        this.paintColor = inputPaintColor;
        this.areTailLightsWorking = inputAreTailLightsWorking;
    }
}
