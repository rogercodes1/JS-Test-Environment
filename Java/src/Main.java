import java.awt.*;

public class Main {

    public static void main(String[] args) {
        System.out.println("Roger - Hello World!!");

        Car myCar = new Car(25.5, "1BCED45", Color.BLUE, true);
        Car sallyVar = new Car(29.5, "89PDF9", Color.RED, true);

        System.out.println("Car LIcense plate:" + myCar.licensePlate);
    }
}
