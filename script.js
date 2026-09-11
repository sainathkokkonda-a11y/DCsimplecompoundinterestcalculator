function toggleCompoundingGroup() {
  const type = document.getElementById('interestType').value;
  const freqGroup = document.getElementById('compoundFreqGroup');
  if (type === 'simple') {
    freqGroup.style.display = 'none';
  } else {
    freqGroup.style.display = 'block';
  }
}

function calculateInterest() {
  const P = parseFloat(document.getElementById('principalAmount').value);
  const rAnnual = parseFloat(document.getElementById('annualRate').value);
  const t = parseFloat(document.getElementById('timeYears').value);
  const type = document.getElementById('interestType').value;
  const n = parseFloat(document.getElementById('compoundFrequency').value);
  const curr = document.getElementById('interestCurrencySymbol').value;

  if (isNaN(P) || isNaN(rAnnual) || isNaN(t) || P <= 0 || rAnnual < 0 || t <= 0) {
    alert("Please enter valid positive numbers for all input fields.");
    return;
  }

  const r = rAnnual / 100;
  let interest = 0;
  let total = 0;

  if (type === 'simple') {
    // Simple Interest Formula: A = P * (1 + r * t)
    interest = P * r * t;
    total = P + interest;
  } else {
    // Compound Interest Formula: A = P * (1 + r/n)^(n*t)
    total = P * Math.pow(1 + (r / n), n * t);
    interest = total - P;
  }

  const formatCurrency = (num) => {
    return curr + ' ' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  document.getElementById('futureValue').innerText = formatCurrency(total);
  document.getElementById('basePrincipal').innerText = formatCurrency(P);
  document.getElementById('totalInterestEarned').innerText = formatCurrency(interest);
}

// Initial setup
toggleCompoundingGroup();
calculateInterest();
