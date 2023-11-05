package examples;

import java.io.FileOutputStream;

final class Util {
    private Util() {
    }

    public static void saveFile(String filename, byte[] data) {
        try (FileOutputStream fileOut = new FileOutputStream(filename)) {
            fileOut.write(data);
        } catch (Exception e) {
            throw new RuntimeException("Error while writing file", e); // NOSONAR
        }
    }
}
