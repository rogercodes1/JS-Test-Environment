import java.awt.*;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {


        int[] numbers = new int[5];

        numbers[0] = 20;
        numbers[1] = 90;
        numbers[2] = 28;
        numbers[3] = 40;
        numbers[4] = 77;
        Arrays.sort(numbers);

        String[] newStr = new String[2];
        newStr[0] = "Bitter Cup";

        System.out.println("Array: " + numbers[3]);
        System.out.println("StrArr: " + newStr[0]);
        System.out.println("Roger - Hello World!!");

        Car myCar = new Car(25.5, "1BCED45", Color.BLUE, true);
        Car sallyVar = new Car(29.5, "89PDF9", Color.RED, true);

        System.out.println("Car LIcense plate: " + myCar.paintColor);
        myCar.changePaintColor(Color.GREEN);
        System.out.println("Car LIcense plate: " + myCar.paintColor);

    }
}
