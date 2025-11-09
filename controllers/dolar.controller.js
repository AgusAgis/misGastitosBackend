// controllers/dolar.controller.js
const dolarService = require('../services/dolar.service'); // Importa la capa de Servicio


const getCotizacionesController = async (req, res) => {
    try {
        const cotizaciones = await dolarService.getCotizaciones();
        res.json(cotizaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * GET /dolar/convertir - Calcula una conversión en vivo.
 */
const getConversionController = async (req, res) => {
    // Ej: ?monto=50&tipo=tarjeta&moneda=USD
    const { montoOriginal, tipoConversion, monedaOriginal } = req.query; 

    if (!montoOriginal || !tipoConversion || !monedaOriginal) {
        return res.status(400).json({ error: 'Faltan parámetros: montoOriginal, tipoConversion, monedaOriginal' });
    }
    
    if (monedaOriginal !== 'USD') {
        return res.json({ montoConvertido: parseFloat(montoOriginal) }); // No necesita conversión
    }

    try {
        const cotizaciones = await dolarService.getCotizaciones(); // Usa el caché
        const tipoDolar = cotizaciones.find(c => c.casa === tipoConversion);

        if (!tipoDolar) {
            return res.status(404).json({ error: 'Tipo de cotización no válido' });
        }

        const montoConvertido = parseFloat(montoOriginal) * tipoDolar.venta;
        res.json({ montoConvertido: Math.round(montoConvertido * 100) / 100 });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCotizacionesController,
    getConversionController
};