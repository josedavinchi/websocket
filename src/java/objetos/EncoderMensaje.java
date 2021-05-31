/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package objetos;
import java.io.IOException;
import java.io.Writer;
import java.math.BigDecimal;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonWriter;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;
/**
 *
 * @author josed
 */
public class EncoderMensaje implements Encoder.TextStream<Mensaje> {

    @Override
    public void encode(Mensaje object, Writer writer) throws EncodeException, IOException {
        JsonObject json = Json.createObjectBuilder()
                .add("nombre",object.getNombre())
                .add("mensaje", object.getMensaje())
                .build();
        try (JsonWriter jsonWrite = Json.createWriter(writer)){
            jsonWrite.writeObject(json);
        }
    }

    @Override
    public void init(EndpointConfig ec) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void destroy() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
