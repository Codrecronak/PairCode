import { v4 as uuidv4 } from "uuid";

const initialCode = `public class Main {
  public static void main(String[] arr){
    System.out.println("Hello, World!");
  }
}`;

const initialFile = {
  id: uuidv4(),
  name: "Main.java",
  content: initialCode,
};

export default initialFile;
