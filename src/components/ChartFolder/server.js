const express = require('express');
const { google } = require('googleapis');
const app = express();
const PORT = 5000;

// Load service account credentials
const key = require('./service-account.json');

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
const analytics = google.analytics('v3');

const jwt = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  scopes
);

app.get('/api/analytics', async (req, res) => {
  try {
    await jwt.authorize();
    const response = await analytics.data.ga.get({
      auth: jwt,
      ids: 'ga:YOUR_VIEW_ID', // Replace with your View ID
      'start-date': '30daysAgo',
      'end-date': 'today',
      metrics: 'ga:sessions',
      dimensions: 'ga:date',
    });

    // Process the response data
    const dates = response.data.rows.map((row) => row[0]);
    const sessions = response.data.rows.map((row) => parseInt(row[1], 10));

    res.json({ dates, sessions });
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    res.status(500).send('Error fetching analytics data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
