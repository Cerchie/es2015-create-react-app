import React from 'react';


function Remove(item, items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)]
      }
    }
  }

export default {Remove}