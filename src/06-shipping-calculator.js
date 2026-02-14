/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  // Your code here
  if (weight <= 0) {
    return -1;
  }
  if (orderTotal < 0) {
    return -1;
  }
  let shippingCost = 0;
  if (country === "US") {
    if (orderTotal > 50) {
      shippingCost = 0;
      return shippingCost;
    } else {
      if (weight <= 1) {
        shippingCost = 5;
        return shippingCost;
      } else if (weight <= 5) {
        shippingCost = 10;
        return shippingCost;
      } else {
        shippingCost = 15;
        return shippingCost;
      }
    }
  } else {
    if (orderTotal > 100) {
      shippingCost = 0;
      return shippingCost;
    } else {
      if (weight <= 1) {
        shippingCost = 15;
        return shippingCost;
      } else if (weight <= 5) {
        shippingCost = 25;
        return shippingCost;
      } else {
        shippingCost = 40;
        return shippingCost;
      }
    }
  }
}

// //AI Suggestion code

// /**
//  * 📦 ShopSwift Shipping Calculator
//  * (Refactored: flatter structure, no nesting, reusable logic)
//  */
// export function calculateShipping(weight, country, orderTotal) {
//   if (weight <= 0 || orderTotal < 0) return -1;  // Guard: invalid input

//   const isDomestic = country === 'US';
//   const freeThreshold = isDomestic ? 50 : 100;
//   if (orderTotal > freeThreshold) return 0;  // Free shipping check

//   // Weight tiers: [up to 1kg, up to 5kg, over 5kg]
//   const tiers = isDomestic ? [5, 10, 15] : [15, 25, 40];
//   const tierIndex = weight <= 1 ? 0 : weight <= 5 ? 1 : 2;
//   return tiers[tierIndex];
// }
